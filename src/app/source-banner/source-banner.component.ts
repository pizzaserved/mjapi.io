import { Component } from '@angular/core';
import { ConstantsService } from '../shared/constants.service';

@Component({
  selector: 'source-banner',
  templateUrl: './source-banner.component.html',
  styleUrls: ['./source-banner.component.scss']
})
export class SourceBannerComponent {
  constructor(private constants: ConstantsService) {}

  navigateToGumroad() {
    window.open(this.constants.GUMROAD_URL, '_blank');
  }
} 