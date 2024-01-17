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
      description: '<div class="col-12 text-center">Trial ended?</div><div class="col-12 text-center">Get another sip</div>',
      type: 'oneTime',
      accountType: 'fairy',
      selected: false,
    },
    {
      productId:'mjapi_io_7_days_fairy',
      name: '7 Days',
      price: 6,
      description: '<div class="col-12 text-center">Not ready to commit?</div><div class="col-12 text-center">No problem</div>',
      type: 'oneTime',
      accountType: 'fairy',
      selected: false
    },
    {
      productId:'mjapi_io_30_days_fairy',
      name: '30 Days',
      price: 25,
      description: '<div class="col-12 text-center">Full month access</div><div class="col-12 text-center">Then renew if needed</div>',
      type: 'oneTime',
      accountType: 'fairy',
      selected: false
    },
    {
      productId:'mjapi_io_monthly_fairy_sub',
      name: 'Subscribe',
      price: 22,
      description: '<div class="col-12 text-center">Non-stop access</div><div class="col-12 text-center">Renews monthly</div>',
      type: 'subscription',
      accountType: 'fairy',
      selected: true
    },
    {
      productId:'mjapi_io_1_day_selfserve',
      name: '1 Day',
      price: 2,
      description: '<div class="col-12 text-center">Trial ended?</div><div class="col-12 text-center">Get another sip</div>',
      type: 'oneTime',
      accountType: 'selfserve',
      selected: false,
    },
    {
      productId:'mjapi_io_7_days_selfserve',
      name: '7 Days',
      price: 10,
      description: '<div class="col-12 text-center">Not ready to commit?</div><div class="col-12 text-center">No problem</div>',
      type: 'oneTime',
      accountType: 'selfserve',
      selected: false
    },
    {
      productId:'mjapi_io_30_days_selfserve',
      name: '30 Days',
      price: 35,
      description: '<div class="col-12 text-center">Full month access</div><div class="col-12 text-center">Then renew if needed</div>',
      type: 'oneTime',
      accountType: 'selfserve',
      selected: false
    },
    {
      productId:'mjapi_io_monthly_selfserve_sub',
      name: 'Subscribe',
      price: 30,
      description: '<div class="col-12 text-center">Non-stop access</div><div class="col-12 text-center">Renews monthly</div',
      type: 'subscription',
      accountType: 'selfserve',
      selected: true
    },
  ];

  btcCard: Card[] = [{
    productId:'btc_payment',
    name: 'Bitcoin',
    price: 0,
    description: 'Roughly $0.7 per day',
    type: 'btc',
    accountType: 'fairy',
    selected: false
  },
  {
    productId:'btc_payment',
    name: 'Bitcoin',
    price: 0,
    description: 'Roughly $1.0 per day ',
    type: 'btc',
    accountType: 'selfserve',
    selected: false
  }]
  constructor() { }

  getPaymentCards(){
    return this.basicCards.slice();
  }

  getBtcCard(){
    return this.btcCard;
  }

}
