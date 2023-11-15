import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";


@Component({
  selector: 'photo-slider',
  templateUrl: './photo-slider.component.html',
  styleUrls: ['./photo-slider.component.scss']
})
export class PhotoSliderComponent implements AfterViewInit{
  @Input() images: string[] = [];
  @Input() duration: number = 0;
  @Input() wait: number = 0;
  @ViewChild('imageSlider') imageSlider! : ElementRef;

  slider: KeenSliderInstance | null = null;
  opacities: number[] = [];


  constructor(){}

  ngAfterViewInit(): void {
    if(this.images.length > 0){
      setTimeout(() => {
        
        setTimeout(() => {
          this.slider = new KeenSlider(this.imageSlider.nativeElement, {
            slides: this.images.length,
            loop: true,
            defaultAnimation: {
              duration: 3000
            },
            detailsChanged: (s) => {
              this.opacities = s.track.details.slides.map((slide) => slide.portion);
            }
          });
        })
        
        this.loopWithDelay();
      }, this.wait);
    }
  }

  async loopWithDelay() {
    let counter = 0;
    while (true) {
      console.log("Iteration:", counter);
      // Await a promise that resolves after a delay
      await new Promise((resolve) => setTimeout(resolve, this.duration));
      this.slider!.next();
      counter++;
    }
  }
}
