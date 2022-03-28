import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }

  constructor(private el: ElementRef) { }

}
