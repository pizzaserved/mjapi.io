import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[collapsiblePanel]'
})
export class CollapsiblePanelDirective {
  isOpened: boolean = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  
  @HostListener('click') click(eventData: Event) {
    const faqItem = this.elementRef.nativeElement.closest('.faq-item');
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const faqToggle = this.elementRef.nativeElement.querySelector('.faq-toggle');
    
    if (!this.isOpened) {
      this.renderer.addClass(faqItem, 'open');
      this.renderer.setStyle(faqAnswer, 'max-height', `${faqAnswer.scrollHeight}px`);
      this.renderer.setProperty(faqToggle, 'textContent', '−');
    } else {
      this.renderer.removeClass(faqItem, 'open');
      this.renderer.setStyle(faqAnswer, 'max-height', '0');
      this.renderer.setProperty(faqToggle, 'textContent', '+');
    }
    
    this.isOpened = !this.isOpened;
  }

}
