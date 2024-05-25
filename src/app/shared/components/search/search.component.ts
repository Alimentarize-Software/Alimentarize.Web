import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  Institution,
  InstitutionResponse,
} from 'src/app/core/model/institution';
import { GiverService } from 'src/app/pages/giver/giver.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnChanges, OnInit {
  results: [] = [];
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  institutions: InstitutionResponse = {} as InstitutionResponse;

  filteredResults: Institution[] = [];
  showResults: boolean = false;

  constructor(private giverService: GiverService, private router: Router) {}

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;
    if (query) {
      this.filteredResults = this.institutions.data.filter((institution) =>
        institution.name.toLowerCase().includes(query.toLowerCase())
      );
      this.showResults = true;
      console.log('Query: ', this.filteredResults);
    } else {
      this.filteredResults = [];
      this.showResults = false;
    }
  }

  ngOnInit(): void {
    this.giverService.getInstitutions(1, 10).subscribe({
      next: (data: InstitutionResponse) => {
        this.institutions = data;
        this.institutions;
      },
    });
  }

  changeValueInput(event: any) {
    console.log('Valores: ', event.target);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes: ', changes);
  }

  redirect(id: number) {
    this.router.navigate([`/doador/instituicoes/instituicao`, id]);
    this.showResults = false;
    this.searchInput.nativeElement.value = '';
  }
}
