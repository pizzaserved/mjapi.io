import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, switchMap } from 'rxjs';
import { URL_PATH } from '../../global';
import { CookieService } from 'ngx-cookie';
import { response } from 'express';
import { ModalService } from './modal.service';

export type User = {
  accountID: string,
  email: string,
  username: string,
  accountType: 'selfserve' | 'fairy'
  endDate: Date,
  hasFiatSub: boolean,
  permaCredits: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedin: boolean = false;
  isRegistered: boolean = false;
  doOpenModal: boolean = false;
  selectedTypeAcc: BehaviorSubject<string> = new BehaviorSubject('');
  isRequestReady: BehaviorSubject<boolean> = new BehaviorSubject(true);
  elementToScrollTo: BehaviorSubject<string> = new BehaviorSubject('');

  currentUser: BehaviorSubject<User |null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private cookieService: CookieService, private modalService: ModalService) { }

  private getUser(email: string) {
    //console.log('get user');
    
    this.isRequestReady.next(false);

    let  params: HttpParams = new HttpParams();
    params = params.append('email', email);

    return this.http.get(`${URL_PATH}/getuser`, {params: params})
  }

  register(email: string, accountType?: string, discordToken?: string): Observable<boolean>{
    //console.log('register', accountType);

    let params: HttpParams = new HttpParams();
    params = params.append('email', email);

    this.checkUserCookies();

    return this.getUser(email).pipe(
      catchError((error) => {
        // getuser error
        if(error != undefined && error.error != undefined && error.error.status == 'error'){
          this.isRegistered = false;

          params = params.append('account_type', accountType!);
          if(discordToken != undefined && discordToken != null && discordToken.length > 0){
            params = params.append('discord_token', discordToken);
          }
          this.doOpenModal = true;
          this.isRequestReady.next(false);

          return this.http.get(`${URL_PATH}/adduser`, {params: params})
        } 
        this.doOpenModal = false;
        return of(null)
      }), 
      catchError((error) => {
        // adduser error
        if (error != null && error.error !== undefined && error.error.status === 'error') {
          this.openModal({status:error.error.status, message:error.error.message})
        }
        return of(null)
      }), 
      switchMap((response: any) => {
        // getuser or adduser is successful

        // console.log("switching response",response);
        if(response != null && response.data !== undefined && response.data !== null) {
          var responseData = response.data;
          var newUser: User = {
            accountType: responseData.account_type,
            accountID: responseData.user_id,
            email: responseData.email,
            username: responseData.user,
            endDate: new Date(responseData.end_date * 1000), // Convert Unix timestamp to Date
            hasFiatSub: responseData.has_fiat_sub,
            permaCredits: responseData.perma_credits
          }
          this.setSelectedTypeAcc(newUser.accountType);

          /* Set cookie */
          this.cookieService.put('userEmail', btoa(newUser.email));

          /* Update current user */
          this.currentUser.next(newUser);

          //console.log(this.currentUser);
          
          this.isLoggedin = true;
          this.isRegistered = true;

          if(this.doOpenModal){
            this.openModal({status:response.status, message:response.message})
          }

          this.isRequestReady.next(false);
        } 
        if(response == null){
          this.isRequestReady.next(true)
          return of(null)
        }
        // if(this.isLoggedin && this.isRegistered)
        //   return of(response)
        //console.log("sent response:", response);
        
        return of(response)
      })
    )
  }

  private checkUserCookies() {
    const userEmail = this.cookieService.get('userEmail');

    if(userEmail) {
      //console.log('Vezi cookie', atob(userEmail))
      return atob(userEmail);
    }

    return null;
  }

  autoLogin(){
    //console.log("login");
    var userEmail = this.checkUserCookies();
    this.doOpenModal = false;
    if(userEmail){
      this.getUser(userEmail).pipe(
        catchError(error => {
          this.isRequestReady.next(true)
          return of(null)
        })
      ).subscribe((response:any)=> {
        // console.log(response);
        
        if(response != null && response.data !== undefined && response.data !== null) {
          var responseData = response.data;
          var newUser: User = {
            accountType: responseData.account_type,
            accountID: responseData.user_id,
            email: responseData.email,
            username: responseData.user,
            endDate: new Date(responseData.end_date * 1000), // Convert Unix timestamp to Date
            hasFiatSub: responseData.has_fiat_sub,
            permaCredits: responseData.perma_credits
          }
          this.setSelectedTypeAcc(newUser.accountType);
          /* Update current user */
          this.currentUser.next(newUser);

          //console.log(this.currentUser);
          
          this.isLoggedin = true;
          this.isRegistered = true;
          this.isRequestReady.next(true);

        } 
      });
    }
    // this.isLoggedin = true;
    // this.isRegistered = true;
  }

  logout(){
    // console.log('logout');
    this.isLoggedin = false;
    this.isRegistered = false;
    this.doOpenModal = false;
    this.cookieService.remove('userEmail')
    this.currentUser.next(null);
    this.isRequestReady.next(true);
  }

  getCurrentUser(){
    if(this.isLoggedin){
      return this.currentUser;
    }
    return null
  }

  setSelectedTypeAcc(type:string){
    // //console.log(type);
    
    if(type != this.selectedTypeAcc.value)
      this.selectedTypeAcc.next(type);
  }

  getSelectedTypeAcc(){
    return this.selectedTypeAcc;
  }

  private openModal({status, message}:{status: string, message:string}): void {
    this.modalService.openModal({status, message});
  }

  setScrollToElement(elementId: string): void {
    this.elementToScrollTo.next(elementId);
  }
}
