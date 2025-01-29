import { Component } from '@angular/core';
import { ConstantsService } from '../shared/constants.service';

@Component({
  selector: 'source-code-card',
  templateUrl: './source-code-card.component.html',
  styleUrls: ['./source-code-card.component.scss']
})
export class SourceCodeCardComponent {
  constructor(private constants: ConstantsService) {}

  navigateToGumroad() {
    window.open(this.constants.GUMROAD_URL, '_blank');
  }
} 