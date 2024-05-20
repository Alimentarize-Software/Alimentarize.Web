import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
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
  }

  private getActiveRootPath(url: string): string {
    const segments = url.split('/');
    return '/' + segments[1] + (segments[2] ? '/' + segments[2] : '');
  }

  public checkHeader() {
    return !(
      this.activePath === '/doador/meu-perfil' ||
      this.activePath === '/instituicao/meu-perfil' ||
      this.activePath === '/doador/configuracoes' ||
      this.activePath === '/instituicao/configuracoes'
    );
  }

}
