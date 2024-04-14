import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.sass'],
})
export class LeftBarComponent {
  @Input() nameUser = '';
  @Input() emailUser = '';

  constructor(private router: Router) {}

  public logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
