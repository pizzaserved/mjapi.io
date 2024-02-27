import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BTCPAY_PATH, URL_PATH } from '../../global';
import { BehaviorSubject, catchError, of, switchMap } from 'rxjs';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  isRequestReady: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private userService: UserService, private http: HttpClient, private modalService: ModalService) {}

  pay(userId: string, productId:string, type: string){
    //console.log("Paying with stripe...");
    var params = new HttpParams();
    params = params.append('user_id', userId);
    params = params.append('product_id', productId);
    params = params.append('type', type);
    this.isRequestReady.next(false);
//console.log(this.isRequestReady.getValue());

    return this.http.get(`${URL_PATH}/createfiatpaymentlink`, {params: params})
    .pipe(
      switchMap((response) => {
        //console.log('Payment response ', response);
        this.isRequestReady.next(false);
        return of(response);
      }),
      catchError((error) => {
        //console.log("Payment error ", error);
        this.isRequestReady.next(false);
        //console.log(this.isRequestReady.getValue());
        if (error != null && error.error !== undefined && error.error.status !== undefined && error.error.status === 'error' && error.error.message !== undefined) {
          this.openModal({
            status: error.error.status, 
            message: 'Oups: ' + error.error.message + '. This product is probably disabled for the selected payment method while we\'re working on it, but reach us at hi@mjapi.io so we can manually activate it for you'
          })
        }
        return of(null);
      })
    )
  }

  btcPay(userId:string, price:string){

    if (!(window as any).btcpay) {
      var script = document.createElement('script');
      script.src = "https://btcpay.mjapi.io/modal/btcpay.js";
      document.getElementsByTagName('head')[0].append(script);
    }

    var formData = new FormData();
    formData.append('storeId', 'AL6hUiHaXFNs1b9nNjLvz1GeJhEKPzpMfPLCv6dYT6oz');
    formData.append('jsonResponse', 'true');
    formData.append('orderId', userId);
    formData.append('checkoutDesc', 'Extend or create your subscription for roughly ~0.7 USD per day. If you encounter any issues, shoot at hi@mjapi.io');
    formData.append('serverIpn', 'https://api.mjapi.io/txipn');
    formData.append('browserRedirect', 'https://mjapi.io');
    formData.append('price', price);
    formData.append('currency', 'USD');


    this.isRequestReady.next(false);
    return this.http.post(`${BTCPAY_PATH}/invoices`, formData).pipe(
      catchError(error => {
        //console.log(error);
        this.isRequestReady.next(true);
        return of(error)
      }),
      switchMap(response => {
        return of(response)
      })
      ).subscribe(response => {
        (window as any).btcpay.appendInvoiceFrame(response.invoiceId);
        setTimeout(() => {
          this.isRequestReady.next(true);
        }, 1500);
    })
  }

  private openModal({status, message}:{status: string, message:string}): void {
    this.modalService.openModal({status, message});
  }
}
