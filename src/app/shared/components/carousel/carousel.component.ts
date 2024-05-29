import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { CarouselItemDirective } from './carousel.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemDirective)
  items!: QueryList<CarouselItemDirective>;
  currentSlide = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.setActiveSlide(this.currentSlide);
    this.items.changes.subscribe(() => {
      this.setActiveSlide(this.currentSlide);
      this.cdr.detectChanges();
    });
  }

  nextSlide(): void {
    this.setActiveSlide((this.currentSlide + 1) % this.items.length);
  }

  prevSlide(): void {
    this.setActiveSlide(
      (this.currentSlide - 1 + this.items.length) % this.items.length
    );
  }

  setSlide(index: number): void {
    this.setActiveSlide(index);
  }

  private setActiveSlide(index: number): void {
    this.items.toArray().forEach((item, i) => (item.active = i === index));
    this.currentSlide = index;
  }
}
