import { Component } from '@angular/core';

@Component({
  selector: 'source-code-card',
  templateUrl: './source-code-card.component.html',
  styleUrls: ['./source-code-card.component.scss']
})
export class SourceCodeCardComponent {
  navigateToGumroad() {
    window.open('https://exploder.gumroad.com/l/mjapi-python', '_blank');
  }
} 