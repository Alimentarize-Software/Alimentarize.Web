import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass'],
})
export class PageNotFoundComponent {
  constructor(private location: Location) {}

  back() {
    this.location.back();
  }
  error = '404';
}
