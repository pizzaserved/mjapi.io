import { Injectable } from '@angular/core';
import { Card } from '../card/card.component';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  basicCards: Card[] = [
    {
      productId:'mjapi_io_1_day_fairy',
      name: '1 Day',
      price: 1,
      description: 'Some text',
      type: 'oneTime',
      accountType: 'fairy',
      selected: false,
    },
    {
      productId:'mjapi_io_7_days_fairy',
      name: '7 Days',
      price: 6,
      description: 'Some text',
      type: 'oneTime',
      accountType: 'fairy',
      selected: false
    },
    {
      productId:'mjapi_io_30_days_fairy',
      name: '30 Day',
      price: 25,
      description: 'Some text',
      type: 'oneTime',
      accountType: 'fairy',
      selected: false
    },
    {
      productId:'mjapi_io_monthly_fairy_sub',
      name: 'Monthly',
      price: 22,
      description: 'Some text',
      type: 'subscription',
      accountType: 'fairy',
      selected: true
    },
    {
      productId:'mjapi_io_1_day_selfserve',
      name: '1 Day',
      price: 0.75,
      description: 'Some text',
      type: 'oneTime',
      accountType: 'selfserve',
      selected: false,
    },
    {
      productId:'mjapi_io_7_days_selfserve',
      name: '7 Days',
      price: 5,
      description: 'Some text',
      type: 'oneTime',
      accountType: 'selfserve',
      selected: false
    },
    {
      productId:'mjapi_io_30_days_selfserve',
      name: '30 Day',
      price: 22,
      description: 'Some text',
      type: 'oneTime',
      accountType: 'selfserve',
      selected: false
    },
    {
      productId:'mjapi_io_monthly_selfserve_sub',
      name: 'Monthly',
      price: 20,
      description: 'Some text',
      type: 'subscription',
      accountType: 'selfserve',
      selected: true
    },
  ];

  btcCard: Card = {
    productId:'btc_payment',
    name: 'Bitcoin',
    price: 0,
    description: 'Roughly $0.7/$1.0 per day (Fairy/SelfServe account)',
    type: 'btc',
    accountType: 'fairy',
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
