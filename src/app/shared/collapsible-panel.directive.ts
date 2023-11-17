import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[collapsiblePanel]'
})
export class CollapsiblePanelDirective {
  isOpened: boolean = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  
  @HostListener('click') click(eventData: Event){
    var panel = this.elementRef.nativeElement.closest('.panel-container')
    //console.log(this.isOpened, panel, this.elementRef);
    if(!this.isOpened){
      this.renderer.addClass(panel,'open');
      this.renderer.addClass(this.elementRef.nativeElement,'open');
    } else {
      this.renderer.removeClass(panel,'open');
      this.renderer.removeClass(this.elementRef.nativeElement,'open');
    }
    this.isOpened = !this.isOpened;
  }

}
