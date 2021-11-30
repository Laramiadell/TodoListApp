import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  @Input('appHeader') format:any;

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'Blue';
  }

}
