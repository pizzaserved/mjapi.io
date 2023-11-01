import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CardService } from './shared/card-service.service';
import { Card } from './card/card.component';
import { Subscription, fromEvent } from 'rxjs';
import { UserService } from './shared/user.service';

declare const ScrollMagic: any;
declare const TweenMax: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'mjapi';
  steps = [
    {
      id: "discord",
      text: <SafeHtml>this.sanitizer.bypassSecurityTrustHtml("<div>You  <a href='https://discord.com/register' target='_blank'>create</a> a new Discord account just for this purpose. Yes, you shouldn't use your own personal account, for a multitude of reasons.</div>"),
      mode: "manual"
    },
    {
      id: "token",
      text: <SafeHtml>this.sanitizer.bypassSecurityTrustHtml("<a href='https://linuxhint.com/get-discord-token/' target='_blank'>Find</a> &nbsp; your discord user token."),
      mode: "manual"
    },
    {
      id: "midjourney",
      text: <SafeHtml>this.sanitizer.bypassSecurityTrustHtml("Get an official Midjourney  &nbsp;<a href='https://docs.midjourney.com/docs/plans' target='_blank'>subscription</a> &nbsp;with the newly created discord account."),
      mode: "manual"
    },
    {
      id: "key",
      text: "Register here and get your API Key via email. You get 1 day of free usage.",
      mode: "auto"
    },
    {
      id: "check-down",
      text: "You're ready to go! Check the API Usage section.",
      mode: "auto"
    },
    {
      id: "expire",
      text: "Once your sub expires, you can extend it by any amount you like!",
      mode: "auto"
    },
  ]

  cardList: Card[] = [];
  btcCard!: Card;

  apiAddJobSampleResponse: Object = {status: 'success', message: 'Yummy!', data: {id: 5614325613212231231, user_id: 4123172867356, prompt: 'photo of the moon taken from a luxurious skyscraper, starts glowing in space --ar 16:9 --version 5.1 --style raw', progress: 55, last_update: 1683876767, result_url: null}};
  apiGetJobSampleResponse: Object = {
    "status": "success",
    "message": "Yummy!",
    "data": {
        "id": 5614325613212231231,
        "user_id": 4123172867356,
        "prompt": "photo of the moon taken from a luxurious skyscraper, starts glowing in space --ar 16:9 --version 5.1 --style raw",
        "progress": 55,
        "last_update": 1683876767,
        "result_url": null
    }
  };

  questionsList = [
    {
      question: 'First very important question?',
      ans: 'First very important answer.'
    },
    {
      question: 'Second very important question?',
      ans: 'Second very important answer.'
    },
    {
      question: 'Third very important question?',
      ans: 'Third very important answer.'
    },
    {
      question: 'Fourth very important question?',
      ans: 'Fourth very important answer.'
    },
  ]

  accountTypeSubscription = new Subscription();
  accountTypeChange = new Subscription();
  currentAccounType:string = '';
  // @ViewChild('accType') accType!: ElementRef;
  switchForm: FormGroup = new FormGroup({
    accType : new FormControl(false),
  })
  accType: string = '';


  constructor(private sanitizer: DomSanitizer, private cardService: CardService, private userService: UserService){}

  ngOnInit(): void {
    this.cardList = this.cardService.getPaymentCards();
    this.btcCard = this.cardService.getBtcCard();
    
    this.switchForm.get('accType')?.valueChanges.subscribe(data=> {
      console.log(data);
      this.accType = data ? 'selfServed' : 'fairy';
      this.userService.setSelectedTypeAcc(this.accType);
    })
    

  }  

  ngAfterViewInit() {
    
    this.accountTypeSubscription = this.userService.getSelectedTypeAcc().subscribe(type=> {
      console.log('New account type is', type, 'but this accType is', this.accType, type== this.accType, type === this.accType);
      if(this.accType !== type)
        this.switchForm.get('accType')?.setValue( type === 'fairy' ? false : true);
      // this.accType.nativeElement.value = type === 'fairy' ? false : true;
      // console.log(this.accType);
      
    })
  }

  changeAccountType(){
    // console.log(this.accType)
  }
}
