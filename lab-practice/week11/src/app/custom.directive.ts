import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.background = 'Yellow';
  }
}
