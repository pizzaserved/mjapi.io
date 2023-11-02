import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CardService } from './shared/card-service.service';
import { Card } from './card/card.component';
import { Subscription, fromEvent } from 'rxjs';
import { User, UserService } from './shared/user.service';

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
  apiAddJobSampleResponse: Object = {
      "status": "success", "message": "Yummy!", "data": {
        "id": 5614325631231,
        "user_id": 4123172867356,
        "type": 'oneshot_upscaled',
        "prompt": "photo of the moon taken from a luxurious skyscraper, starts glowing in space --ar 16:9 --version 5.1 --style raw",
        "progress": -1,
        "last_update": 1683876767,
        "result_url": null,
        "state": "new",
        "account_type": "fairy"
      }
  };
  apiGetJobSampleResponse: Object = {
    "status": "success", "message": "Yummy!", "data": {
      "id": 56143252232000,
      "user_id": 4123167356,
      "type": 'oneshot_upscaled',
      "prompt": "photo of the moon taken from a luxurious skyscraper, starts glowing in space --ar 16:9 --version 5.1 --style raw",
      "progress": 55,
      "last_update": 1698658812,
      "result_url": null,
      "state": "active",
      "result_msg_id": null,
      "followup_menu": null
    }
  };

  questionsList = [
      {
        question: 'Why GET and not POST?',
        ans: 'We went full minimalistic here, the minimum effort for the desired result. It\'s really convenient to copy-paste the request directly in Chrome and see the result -- no Postman, curl etc. HTTPS makes sure the URL path/query etc. are encrypted, so nothing to be worried about. We might also mirror the current API via POST requests, if enough people ask for it'
      },
      {
        question: 'How do I cancel my sub?',
        ans: 'To cancel a Stripe sub, simply email us. If the email\'s subject matches \'please cancel my sub\' exactly, it\'ll be automatically cancelled. Otherwise, we\'ll do it manually in 7-14 days. No worries, any extra charges will be refunded. Note that this doesn\'t return your initial payment, and you\'ll continue benefiting from the full existing sub. This merely cancels the auto-renewal, and it\'s how subs work in general (we\'re not reinventing the wheel here)'
      },
      {
        question: 'Can I get a refund?',
        ans: 'Sure, shoot at hi@mjapi.io. This only works for Stripe one-time-payments (for subs see \'How do I cancel my sub?\'). If the email\'s subject matches \'please refund my previous payment\' exactly, and you\'ve paid less than 7 days ago, it\'s done automatically. In case that doesn\'t happen, simply shoot us a follow-up email.'
      },
      {
        question: 'What if MidJourney gets their own API?',
        ans: 'mjapi.io started as a solution we\'ve built for ourselves, and several projects rely on it. We\'ll be too lazy to refactor all our front-ends. Instead, we\'ll keep using mjapi.io and just adapt our back-end, if needed. This means you won\'t notice a thing. 👍'
      },
  ]

  accountTypeSubscription = new Subscription();
  accountTypeChange = new Subscription();
  userServiceSubscription = new Subscription();

  currentAccounType:string = '';
  // @ViewChild('accType') accType!: ElementRef;
  switchForm: FormGroup = new FormGroup({
    accType : new FormControl(false),
  })
  accType: string = '';

  currentUser: User| null = null
  isLoggedIn: boolean = false;

  constructor(private sanitizer: DomSanitizer, private cardService: CardService, private userService: UserService){}

  ngOnInit(): void {

    this.cardList = this.cardService.getPaymentCards();
    this.btcCard = this.cardService.getBtcCard();
    
    this.switchForm.get('accType')?.valueChanges.subscribe(data=> {
      console.log(data);
      this.accType = data ? 'selfserve' : 'fairy';
      this.userService.setSelectedTypeAcc(this.accType);
    });
    
    this.userServiceSubscription = this.userService.currentUser.subscribe((user) => {
      console.log("A user has logged in:", user);
      this.currentUser = user;
      this.isLoggedIn = true;
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

}
