import {Directive, HostListener, Input} from '@angular/core';
import {SuiPopup} from 'ng2-semantic-ui/dist';

/**
 * Directive to delay the opening of NgbTooltips by 1 second
 */

@Directive({
  selector: '[tooltip-delay]'
})
export class DelayTooltipDirective {

  /** The tooltip to delay opening */
  @Input('tooltip-delay') tooltip: SuiPopup;

  /** Used to store the open tooltip for closing later on */
  openCode: any;

  /**
   * Listens for a mouseenter on the tooltipped element and delays the opening
   */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.openCode = setTimeout(() => {
      this.tooltip.open();
    }, 1000);
  }

  /**
   * Listens for a mouseleave on the tooltipped element, removes the timeout, and closes
   */
  @HostListener('mouseleave')
  onMouseLeave() {
    clearTimeout(this.openCode);
    this.tooltip.close();
  }

}
