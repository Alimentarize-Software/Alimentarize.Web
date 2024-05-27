import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
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
      this.activePath === '/instituicao/configuracoes' ||
      this.activePath === '/instituicao/home' ||
      this.activePath === '/doador/home'
    );
  }
}
