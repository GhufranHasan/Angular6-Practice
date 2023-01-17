import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
  }

  // changeBg(color: string) {
  //   this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color)
  // }

  @HostListener('click') myClick() {
    // alert('Clicked')
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue')
  }

  @HostListener('mouseover') myMouseOver() {
    // alert('MouseOver')
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightgray')
  }
  
  @HostListener('mouseout') myMouseOut() {
    // alert('MouseOut')
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white')
  }

}
