  import {Directive, ElementRef} from '@angular/core';
  import {DomSanitizer} from "@angular/platform-browser";

@Directive({
  selector: '[modular-panel]'
})
export class ModularPanelDirective {

  constructor(el: ElementRef, private sanitizer: DomSanitizer, private elementRef: ElementRef) {
    this.elementRef.nativeElement.outerHTML = `<h1>Test</h1>`
  }

}
