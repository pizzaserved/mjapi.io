import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from '../shared/payment.service';
import { User, UserService } from '../shared/user.service';

export type Card = {
  name: string,
  price: number,
  description: string,
  type: string,
  selected: boolean
}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() card!: Card;

  currentUser: User | null = null

  btcForm: FormGroup = new FormGroup({
    'btcSlider': new FormControl<number>(10)
  })

  constructor(private paymentService: PaymentService, private userService: UserService){}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => {
      
    })
  }

  initPayment(productId: string){

  }
}
