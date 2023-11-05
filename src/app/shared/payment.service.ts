import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_PATH } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private userService: UserService, private http: HttpClient) {}

  payStripe(userId: string, productId:string){
    console.log("Paying with stripe...");
    var params = new HttpParams();
    params = params.append('user_id', userId);
    params = params.append('product_id', productId);

    this.http.get(`${URL_PATH}/createfiatpaymentlink`, {params: params})
    .subscribe({
      next: (response) => {
        console.log('Payment response ', response)
      },
      error: (error) => {
        console.log("Payment error ", error);
        
      }
    })
  }
}
