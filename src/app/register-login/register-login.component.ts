import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserService } from '../shared/user.service';
import { Subscription } from 'rxjs';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'register-login-form',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit, AfterViewInit{

  registerForm: FormGroup = new FormGroup({
    accType: new FormControl(false, Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl(''),
    discordToken: new FormControl(''),
  });
  isLoggedIn: boolean = false;
  isRegistered: boolean | null = false;
  isRequestReady: boolean = true;

  userTypeAccount: string = 'fairy';

  currentUser: User | null = null;
  currentUserSubscription: Subscription = new Subscription();
  accountTypeSubscription: Subscription = new Subscription();
  userServiceSubscription: Subscription = new Subscription();
  isReqReadySubscription: Subscription = new Subscription();

  constructor(private userService: UserService, private modalService: ModalService){}

  ngOnInit(): void {

    this.currentUserSubscription = this.userService.currentUser.subscribe((user)=> {
      //console.log("Nou utilizator interceptat", user);
      if(user){
        this.currentUser = user
        this.isLoggedIn = true;
        this.isRegistered = true
      }else {
        this.currentUser = null
        this.isLoggedIn = false;
        this.isRegistered = false
      }
    })

    this.registerForm.get('accType')?.valueChanges.subscribe(newMode => {
      //console.log("aicii", newMode);
      
      if(newMode){
        this.userTypeAccount = 'selfserve';
        this.registerForm.controls['discordToken'].setValidators(Validators.required);
        this.registerForm.controls['username'].setValidators(Validators.required);
      } else {
        this.userTypeAccount = 'fairy';
        this.registerForm.controls['discordToken'].clearValidators();
        this.registerForm.controls['username'].clearValidators();
      }
      this.userService.setSelectedTypeAcc(this.userTypeAccount)
      this.registerForm.controls['discordToken'].updateValueAndValidity();
      this.registerForm.controls['username'].updateValueAndValidity();
      //console.log(this.userTypeAccount, newMode);
    })

    this.registerForm.get('email')?.valueChanges.subscribe( email => {
      //console.log(email.split("@"));
      var parts = email.split("@");
      if(parts.length > 1){
        var uname = parts[0];
        this.registerForm.get('username')?.setValue(uname)
      }
    })
    
    this.accountTypeSubscription = this.userService.getSelectedTypeAcc().subscribe(type=> {
      //console.log('In register new account type is', type);
      if(this.userTypeAccount !== type)
        this.registerForm.get('accType')?.setValue(type === 'fairy' ? false : true)
    })

    this.isReqReadySubscription = this.userService.isRequestReady.subscribe(request => {
      this.isRequestReady = request;
      console.log(request);
      
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Your code to change accType value
      this.registerForm.get('accType')?.setValue(false);
      this.userTypeAccount = 'fairy';
    });
  }

  submitRegister(){
    //console.log(this.registerForm);
    if(this.registerForm.status == 'VALID'){
      //console.log("Valid registration");
      var email = this.registerForm.controls['email'].value;
      var discordToken = this.registerForm.controls['discordToken'].value;
      // var username = this.registerForm.controls['username'].value;
      //console.log("before register:", this.userTypeAccount);
      
      this.userServiceSubscription = this.userService.register(email, this.userTypeAccount, discordToken)
        .subscribe((successfullyRegistered:any) => {
          //console.log("Raspuns", successfullyRegistered);
          
          if(successfullyRegistered){
            // this.openModal({status: successfullyRegistered.status, message: successfullyRegistered.message})
            //console.log("heyheyhey", successfullyRegistered);
            
            this.userService.currentUser.subscribe((user) => {
              //console.log("A user has logged in:", user);
              if(user != null){
                this.currentUser = user;
                this.isRegistered = true;
                this.isLoggedIn = true;
              }
            })
          }
        })
      
    }
  }

  logout(){
    this.userService.logout();
    this.isLoggedIn = false;
    this.isRegistered = false
  }

  // openModal({status, message}:{status: string, message:string}): void {
  //   this.modalService.openModal({status, message});
  // }
}
