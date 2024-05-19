import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionCard } from 'src/app/core/model/institution';

@Component({
  selector: 'app-card-institution',
  templateUrl: './card-institution.component.html',
  styleUrls: ['./card-institution.component.sass'],
})
export class CardInstitutionComponent {
  @Input() card: InstitutionCard = {} as InstitutionCard;

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
    this.router.navigate([`/doador/instituicoes/instituicao`, id]);
  }
}
