import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[carouselItem]',
})
export class CarouselItemDirective {
  constructor() {}
  @HostBinding('class.active') active = false;
}
