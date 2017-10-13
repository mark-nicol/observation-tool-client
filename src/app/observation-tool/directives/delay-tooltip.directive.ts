import {Directive, HostListener, Input, OnInit} from '@angular/core';
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";

@Directive({
  selector: '[tooltip-delay]'
})
export class DelayTooltipDirective{

  @Input('tooltip-delay') tooltip: NgbTooltip;
  openCode;

  constructor() {  }

  @HostListener('mouseenter') onMouseEnter() {
    this.openCode = setTimeout(() => {this.tooltip.open();}, 1000);
  }

  @HostListener('mouseleave') onMouseLeave() {
    clearTimeout(this.openCode);
    this.tooltip.close();
  }

}
