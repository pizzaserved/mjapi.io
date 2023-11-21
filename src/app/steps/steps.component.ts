import { AfterViewInit, Component, Input } from '@angular/core';
import scrollReveal from '../shared/scrollReveal';

@Component({
  selector: 'steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements AfterViewInit{
  @Input() stepsArray!: any;
  @Input() accType!: any;
  // @Input() i!: number;

  constructor(){}

  ngAfterViewInit(): void {
    console.log("after init", this.stepsArray);
    
    // scrollReveal.reveal('.container-test', {
    //   reset: true, 
    //   origin: 'right',
    //   duration: 1000,
    //   delay: 150,
    //   distance: '0px',
    //   scale: .8,
    //   easing: 'cubic-bezier(0.5, 0, 0, 1)'
    // });
  }
}
