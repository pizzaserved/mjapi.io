import { Component } from '@angular/core';

@Component({
  selector: 'source-banner',
  templateUrl: './source-banner.component.html',
  styleUrls: ['./source-banner.component.scss']
})
export class SourceBannerComponent {
  navigateToGumroad() {
    window.open('https://exploder.gumroad.com/l/mjapi-python', '_blank');
  }
} 