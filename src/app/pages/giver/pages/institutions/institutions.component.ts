import { Component, OnInit } from '@angular/core';
import {
  Categories,
  InstitutionResponse,
} from 'src/app/core/model/institution';
import { GiverService } from '../../giver.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.sass'],
})
export class InstitutionsComponent implements OnInit {
  constructor(private giverService: GiverService) {}
  institutions: InstitutionResponse = {} as InstitutionResponse;
  loading: boolean = true;
  skeletons: any[] = new Array(8);
  categories: Categories[] = [];
  categoriesFilter: string[] = [];
  ngOnInit(): void {
    this.getAllInstitutions();

    this.giverService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getAllInstitutions() {
    this.loading = true;
    this.giverService.getInstitutions(1, 10, this.categoriesFilter).subscribe({
      next: (data: InstitutionResponse) => {
        this.institutions = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      },
    });
  }

  addCategory(category: string) {
    if (category === 'Crianças') {
      this.categoriesFilter.push('Criancas');
    } else {
      this.categoriesFilter.push(category);
    }
    this.getAllInstitutions();
  }

  deleteCategory(category: string) {
    const index = this.categoriesFilter.findIndex((cat) => cat === category);
    if (index !== -1) {
      this.categoriesFilter.splice(index, 1);
      this.getAllInstitutions();
    }
  }

  onCategoryChange(event: Event, category: string) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.addCategory(category);
    } else {
      this.deleteCategory(category);
    }
  }
}
