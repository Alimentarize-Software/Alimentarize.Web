import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Input() totalPages: number;

  @Output() pageChange = new EventEmitter<number>();

  pages: number[];

  constructor() { }

  ngOnChanges(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  nextPage(): void {
    this.changePage(this.currentPage + 1);
  }

  previousPage(): void {
    this.changePage(this.currentPage - 1);
  }
}

