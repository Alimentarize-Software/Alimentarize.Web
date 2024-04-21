import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/model/menuOptions';
import { DonorMenu, InstitutionMenu } from './options';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.sass'],
})
export class LeftBarComponent implements OnInit {
  @Input() nameUser = '';
  @Input() emailUser = '';

  menuOptions: Menu[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userType = localStorage.getItem('typeUser');

    if (userType === 'donor') {
      this.menuOptions = DonorMenu;
    } else if (userType === 'institution') {
      this.menuOptions = InstitutionMenu;
    }

    console.log(this.menuOptions);
  }
  public logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
