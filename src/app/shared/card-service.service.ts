import { Injectable } from '@angular/core';
import { Card } from '../card/card.component';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  basicCards: Card[] = [
    {
      name: '1 Day',
      price: 1,
      description: 'Some text',
      type: 'oneTime',
      selected: false
    },
    {
      name: '7 Days',
      price: 6,
      description: 'Some text',
      type: 'oneTime',
      selected: false
    },
    {
      name: '30 Day',
      price: 25,
      description: 'Some text',
      type: 'oneTime',
      selected: false
    },
    {
      name: 'Monthly',
      price: 22,
      description: 'Some text',
      type: 'subscription',
      selected: true
    },
  ];

  btcCard: Card = {
    name: 'Bitcoin',
    price: 0,
    description: 'Roughly $0.7/$1.0 per day (Fairy/SelfServe account)',
    type: 'btc',
    selected: false
  }
  constructor() { }

  getPaymentCards(){
    return this.basicCards.slice();
  }

  getBtcCard(){
    return this.btcCard;
  }

}
