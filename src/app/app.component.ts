import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CardService } from './shared/card-service.service';
import { Card } from './card/card.component';
import { Subscription, fromEvent } from 'rxjs';
import { User, UserService } from './shared/user.service';
import { CookieConsentService } from './shared/cookie-consent.service';
import KeenSlider, { KeenSliderInstance } from "keen-slider";

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
      text: <SafeHtml>this.sanitizer.bypassSecurityTrustHtml("<div>You  <a href='https://discord.com/register' target='_blank'>create</a> a new Discord account just for this purpose. Yes, you shouldn't use your own personal account, for a multitude of reasons</div>"),
      mode: "selfserve"
    },
    {
      id: "token",
      text: <SafeHtml>this.sanitizer.bypassSecurityTrustHtml("<a href='https://linuxhint.com/get-discord-token/' target='_blank'>Find</a> &nbsp;your discord user token"),
      mode: "selfserve"
    },
    {
      id: "midjourney",
      text: <SafeHtml>this.sanitizer.bypassSecurityTrustHtml("Get an official Midjourney&nbsp;<a href='https://docs.midjourney.com/docs/plans' target='_blank'>subscription</a>&nbsp;with the newly created discord account"),
      mode: "selfserve"
    },
    {
      id: "key",
      text: "Register here and get your API Key via email. You get 1 day of free usage",
      mode: "fairy"
    },
    {
      id: "check-down",
      text: "You're ready to go! Check the API Usage section",
      mode: "fairy"
    },
    {
      id: "expire",
      text: "Once your sub expires, you can extend it by any amount you like",
      mode: "fairy"
    },
  ]

  cardList: Card[] = [];
  btcCardList: Card[] = [];
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
  apiCancelJobSampleResponse: Object = {
      "status": "success", "message": "Done", "data": null
  };
  
  questionsList = [
      {
        question: 'Do I need a MidJourney sub?',
        ans: 'No, only SelfServe accounts need to provide a MJ-enabled discord token'
      },
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
      {
        question: 'Why is SelfServe more expensive?',
        ans: 'For safety reasons, SelfServe accounts require a dedicated runner instance on our backend. This also means your prompts will get executed faster, since there\'s no queue (unlike Fairy accounts)'
      }
  ]

  accountTypeSubscription = new Subscription();
  accountTypeChange = new Subscription();
  userServiceSubscription = new Subscription();

  @ViewChild('switchFirstLabel') switchFirstLabel!: ElementRef;
  @ViewChild('switchSecondLabel') switchSecondLabel!: ElementRef;
  @ViewChild('imageSlider') imageSlider! : ElementRef;
  @ViewChild('imageSlider2') imageSlider2! : ElementRef;
  @ViewChild('imageSlider3') imageSlider3! : ElementRef;

  switchForm: FormGroup = new FormGroup({
    accType : new FormControl(false),
  })
  switchIsDisabled: boolean = false;
  accountType: string = '';

  currentUser: User| null = null
  isLoggedIn: boolean = false;

  slider: KeenSliderInstance | null = null;
  slider2: KeenSliderInstance | null = null;
  slider3: KeenSliderInstance | null = null;
  
  squareUrls = [
    "https://storage.googleapis.com/mjapi-pub/screens/square/boy_skyscraper.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__best_digital_art_tech_city_pink_and_blue_and_violet_int_ca2255cf-5eb8-43b8-8803-b0707adc4d1d2.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__best_paint_ever_0e0c01cd-e787-45e5-874d-6a7ddb06caa7q.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__cool_teenager_on_a_skyscraper_looking_down_the_city_sun_500c6e6f-ac39-4ccd-b23d-7afdc3d75630e.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__massive_tree_of_life_in_garden_of_eden_sunrise_far_away_137f3f09-61e3-4d5c-ac9b-d370ea199ddb.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__best_paint_ever_c4bdcc47-ad81-4b11-b7ff-d586f26fdf84.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__massive_tree_of_life_in_garden_of_eden_sunrise_far_away_8b0684a9-5cc2-421c-a7d8-093dd035e2eb22.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__best_digital_art_tech_city_pink_and_blue_and_violet_int_f3bbc807-b494-4dc3-82ef-094e6495c694.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__cool_teenager_girl_on_a_hill_with_her_dog_looking_down__192413ac-7570-422f-b4d6-75d2a93abb33.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__very_nice_cat_digital_artrealistic_10548c35-a245-40e0-8167-e1346027e3bcbb.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__best_paint_ever_0e0c01cd-e787-45e5-874d-6a7ddb06caa7qqa.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__impressive_disrupting_highly_detailed_sphere_logo_with__c492cfbd-f036-442c-bdc8-7a8fc6bf3a1922.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__incredible_art_poster_urban_punk_technology_cool_39ecba80-dc0a-4bf1-8f92-43f992ecc711b.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__massive_tree_of_life_in_garden_of_eden_sunrise_far_away_c3bfd812-e3f8-48d1-a25d-17b2c0c83eff.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__best_paint_ever_0e0c01cd-e787-45e5-874d-6a7ddb06caa7qq.png",
    "https://storage.googleapis.com/mjapi-pub/screens/square/gegep__very_nice_cat_digital_artrealistic_547c6821-147d-4e6a-af96-48ab9db169a622.png"
  ];
  
  landUrls = [
    "https://storage.googleapis.com/mjapi-pub/screens/land/gegep__cool_teenager_girl_on_a_hill_with_her_dog_looking_down__d6e14204-ddfa-49ef-a6d3-0b6d5c271403.png",
    "https://storage.googleapis.com/mjapi-pub/screens/land/gegep__incredible_art_poster_urban_punk_technology_cool_a5387a39-cf98-4980-96b9-decd2e91198c.png",
    "https://storage.googleapis.com/mjapi-pub/screens/land/a-4k-ultra-hd-wallpaper-of-a-couple-holding-hands-and-standing-on-a-cliff-overlo-85ot0vwi.jpeg",
    "https://storage.googleapis.com/mjapi-pub/screens/land/gifts-are-delivered-by-santa-claus-on-a-motorcycle-njbcpebh.jpeg",
    "https://storage.googleapis.com/mjapi-pub/screens/land/gegep__incredible_art_poster_urban_punk_technology_cool_cadfa630-b260-4c4e-8ff5-6af009ecf7dd.png",
    "https://storage.googleapis.com/mjapi-pub/screens/land/gegep__massive_tree_of_life_in_garden_of_eden_sunrise_far_away_141c5ba0-a293-4722-af94-a8882cad54f2.png",
    "https://storage.googleapis.com/mjapi-pub/screens/land/a-man-walking-in-a-foggy-forest-ehmuca4u.jpeg",
    "https://storage.googleapis.com/mjapi-pub/screens/land/gegep__incredible_art_poster_urban_punk_technology_cool_d0b11198-d3e3-4415-944d-244c34c2b382.png",
    "https://storage.googleapis.com/mjapi-pub/screens/land/gegep__massive_tree_of_life_in_garden_of_eden_sunrise_far_away_9ac9dfd5-8475-4363-a70b-7eda94a43988.png"
  ];
  halfPart = Math.floor(this.squareUrls.length / 2);

  constructor(private cookieConsentService: CookieConsentService, private sanitizer: DomSanitizer, private cardService: CardService, private userService: UserService, private renderer: Renderer2){}

  ngOnInit(): void {
    this.userService.autoLogin()

    this.cardList = this.cardService.getPaymentCards();
    this.btcCardList = this.cardService.getBtcCard();

    this.cardList.forEach(card => {
      card.description = <SafeHtml>this.sanitizer.bypassSecurityTrustHtml(card.description);
    })
    
    this.switchForm.get('accType')?.valueChanges.subscribe(data=> {
      this.accountType = data ? 'selfserve' : 'fairy';
      this.userService.setSelectedTypeAcc(this.accountType);
    });
  }  

  ngAfterViewInit() {
    
    this.accountTypeSubscription = this.userService.getSelectedTypeAcc().subscribe(type=> {
      console.log("after view init", type, this.userService.selectedTypeAcc);
      
      if(this.accountType !== type)
        this.switchForm.get('accType')?.setValue( type === 'fairy' ? false : true);
    })

    this.userServiceSubscription = this.userService.currentUser.subscribe((user) => {
      console.log("A user has logged in:", user);
      if(user){
        this.currentUser = user;
        
        this.isLoggedIn = true;
        this.switchForm.get('accType')?.setValue(this.currentUser.accountType == 'fairy'? false : true);
        
        this.switchForm.get('accType')?.disable();
        this.switchIsDisabled = true;
        
        if(this.accountType == 'fairy'){
          this.renderer.removeClass(this.switchFirstLabel.nativeElement, 'disabled')
          this.renderer.addClass(this.switchSecondLabel.nativeElement, 'disabled')
        } else {
          this.renderer.addClass(this.switchFirstLabel.nativeElement, 'disabled')
          this.renderer.removeClass(this.switchSecondLabel.nativeElement, 'disabled')
        }
      } else{
        this.currentUser = null;
        this.isLoggedIn = false;
        this.switchForm.get('accType')?.enable();
        this.switchIsDisabled = false;
      }
    })
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      // Using requestAnimationFrame to wait for the next repaint
      requestAnimationFrame(() => {
        // Adding another requestAnimationFrame to wait an additional frame
        // in case the changes are not rendered in the first repaint
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      });
    }
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
