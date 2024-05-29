import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  activePath: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activePath = this.getActiveRootPath(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {
    this.activePath = this.getActiveRootPath(this.router.url);
    const userType = localStorage.getItem('typeUser');

    if (userType === 'donor') {
      this.menuOptions = DonorMenu;
    } else if (userType === 'receiver') {
      this.menuOptions = InstitutionMenu;
    }
  }

  setActiveOption(path: string): void {
    this.activePath = path;
  }

  isActiveOption(path: string): boolean {
    return this.activePath === path;
  }

  private getActiveRootPath(url: string): string {
    const segments = url.split('/');
    return '/' + segments[1] + (segments[2] ? '/' + segments[2] : '');
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
