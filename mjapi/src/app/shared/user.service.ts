import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type User = {
  accountID: string,
  email: string,
  username: string,
  accountType: 'selfServed' | 'fairy'
  endDate: Date
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedin: boolean = false;
  isRegistered: boolean = false;

  currentUser: BehaviorSubject<User> | null = null;

  constructor(private http: HttpClient) { }

  register(email: string, username: string, accountType: string, discordToken?: string){
    console.log('register');

    let params: HttpParams = new HttpParams();
    params = params.append('user', username);
    params = params.append('email', email);
    params = params.append('discord_token', discordToken != undefined ? discordToken : '');

    this.http.get('https://api.mjapi.io/adduser', {params: params})
      .subscribe({
        next: (data)=> {
        console.log("Am inregistrat ",data);
        // var registeredUser = {
        //   accountID: data.data.user_id,
        //   username: data.data.user,
        //   email: data.data.email,
        //   endDate: data.data.end_date
        // }
        // this.currentUser?.next(registeredUser)
        }, 
        error: (error) => {
          console.log(error);
          
        }
      })
    
    // this.currentUser = user;
    this.isRegistered = true;
    this.isLoggedin = true;
  }

  login(email: string){
    console.log("login");
    
    this.isLoggedin = true;
    this.isRegistered = true;
  }

  logout(){
    console.log('logout');
    
  }

  getCurrentUser(){
    if(this.isLoggedin){
      return this.currentUser;
    }
    return null
  }

}
