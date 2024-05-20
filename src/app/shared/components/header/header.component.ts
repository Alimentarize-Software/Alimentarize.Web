import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  link: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userType = localStorage.getItem('typeUser');

    if (userType === 'donor') {
      this.link = 'doador';
    } else if (userType === 'institution') {
      this.link = 'instituicao';
    }
  }
  
  redirectPage() {
    this.router.navigate([
      `/${this.link}/configuracoes`,
    ]);
  }
}
