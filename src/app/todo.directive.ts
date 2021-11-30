import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTodo]'
})
export class TodoDirective {

  @Input('appTodo') format:any;

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = '#000080';
  }


}
