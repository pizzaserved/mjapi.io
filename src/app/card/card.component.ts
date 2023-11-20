import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from '../shared/payment.service';
import { User, UserService } from '../shared/user.service';
import scrollReveal from '../shared/scrollReveal';

export type Card = {
  productId: string,
  name: string,
  price: number,
  description: any,
  type: string,
  accountType: string,
  selected: boolean
}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit{
  @Input() card!: Card;
  @Input() disabled: boolean = false;

  isRequestReady: boolean = true;

  @ViewChild('stripeOption') stripeOption!: ElementRef;
  @ViewChild('paypalOption') paypalOption!: ElementRef;

  currentUser: User | null = null

  btcForm: FormGroup = new FormGroup({
    'btcSlider': new FormControl<number>(10)
  })

  constructor(private paymentService: PaymentService, private userService: UserService){}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => {
      this.currentUser = user;
      console.log(user);
    })
    this.paymentService.isRequestReady.subscribe((value) => {
      this.isRequestReady = value;
      console.log("isRequest ready?", value);
      
    })
  }

  ngAfterViewInit(): void {
    scrollReveal.reveal('.payment-card', {
      reset: true, 
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '0px',
      scale: .8,
      easing: 'cubic-bezier(0.5, 0, 0, 1)'
    })
  }

  showPaymentOptions(event: Event){
    //console.log(event);

    if(event.target instanceof HTMLElement){
      event.target.style.display = 'none';
    }

    this.stripeOption.nativeElement.style.display = 'flex';
    this.paypalOption.nativeElement.style.display = 'flex';

    setTimeout(() => {
      if(event.target instanceof HTMLElement){
        event.target.style.display = 'flex';
      }
  
      this.stripeOption.nativeElement.style.display = 'none';
      this.paypalOption.nativeElement.style.display = 'none';
    }, 10000);
  }

  initPayment(productId: string, type: string){
    if(!this.currentUser){
      this.userService.setScrollToElement('login');
    } else if(this.card.type !== 'btc' && !this.disabled && this.isRequestReady){
      this.paymentService.pay(this.currentUser!.accountID, productId, type)
        .subscribe((response: any)=>{
          if(response){
            //console.log(response);
            if(response.data!= undefined && response.data.payment_link != undefined){
              //console.log(response.data.payment_link);
              
              /* Open in a ne tab/window */
              var newWindow = window.open(response.data.payment_link, '_blank');
              if(newWindow){
                newWindow.focus()
              }else{
                /* if smth goes wrong, open in the same tab */
                window.location.href = response.data.payment_link; 
              }
            }
          }
          this.paymentService.isRequestReady.next(true);
        })
    } else {
      if(!this.disabled && this.isRequestReady && this.currentUser){
        this.paymentService.btcPay(this.currentUser?.accountID, this.btcForm.get('btcSlider')!.value)
      }
    }
  }
}
