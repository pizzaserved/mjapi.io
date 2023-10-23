import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CardService } from './shared/card-service.service';
import { Card } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mjapi';
  steps = [
    {
      id: "discord",
      text: <SafeHtml>this.sanitizer.bypassSecurityTrustHtml("<div>You  <a href='https://discord.com/register'>create</a> a new Discord account just for this purpose. Yes, you shouldn't use your own personal account, for a multitude of reasons.</div>"),
      mode: "manual"
    },
    {
      id: "token",
      text: <SafeHtml>this.sanitizer.bypassSecurityTrustHtml("<a href='https://linuxhint.com/get-discord-token/'>Find</a> your discord user token."),
      mode: "manual"
    },
    {
      id: "midjourney",
      text: <SafeHtml>this.sanitizer.bypassSecurityTrustHtml("Get an official Midjourney <a href='https://docs.midjourney.com/docs/plans'>subscription</a> with the newly created discord account."),
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

  constructor(private sanitizer: DomSanitizer, private cardService: CardService){}

  ngOnInit(): void {
    this.cardList = this.cardService.getPaymentCards();
    this.btcCard = this.cardService.getBtcCard();
  }

  collapsePanel() {

  }
}
