import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Institution } from 'src/app/core/model/institution';

@Component({
  selector: 'app-card-institution',
  templateUrl: './card-institution.component.html',
  styleUrls: ['./card-institution.component.sass'],
})
export class CardInstitutionComponent {
  @Input() card: Institution = {} as Institution;

  theme = {
    mulheres: '#FFB6B6',
    criancas: '#2196F3',
    idosos: '#FFC107',
  };

  constructor(private router: Router) {}

  themeCard(category: string): string {
    return this.theme[category as keyof typeof this.theme];
  }

  redirect(id: string) {
    this.router.navigate(['/instituition']);
  }
}
