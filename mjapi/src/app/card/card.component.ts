import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  btcForm: FormGroup = new FormGroup({
    'btcSlider': new FormControl<number>(10)
  })

  constructor(){}

  ngOnInit(): void {
    
  }
}
