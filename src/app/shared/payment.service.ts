import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_PATH } from '../../global';
import { BehaviorSubject, catchError, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  isRequestReady: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private userService: UserService, private http: HttpClient) {}

  pay(userId: string, productId:string, type: string){
    console.log("Paying with stripe...");
    var params = new HttpParams();
    params = params.append('user_id', userId);
    params = params.append('product_id', productId);
    params = params.append('type', type);
    this.isRequestReady.next(false);
console.log(this.isRequestReady.getValue());

    return this.http.get(`${URL_PATH}/createfiatpaymentlink`, {params: params})
    .pipe(
      switchMap((response) => {
        console.log('Payment response ', response);
        this.isRequestReady.next(false);
        return of(response);
      }),
      catchError((error) => {
        console.log("Payment error ", error);
        this.isRequestReady.next(false);
        console.log(this.isRequestReady.getValue());

        return of(null);
      })
    )
  }
}
