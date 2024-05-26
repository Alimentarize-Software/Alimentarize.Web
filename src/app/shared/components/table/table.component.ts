import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent {
  showActions: boolean = false;
  @Input() data: any[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userType = localStorage.getItem('typeUser');
    // console.log('user: ', userType);

    if (userType === 'receiver') {
      this.showActions = true;
    }
  }

  redirect(phone: string) {
    const url = `https://api.whatsapp.com/send?phone=${phone}`;
    window.open(url, '_blank');
  }

  onPageChange(page: number) {
    this.pageChange.emit(page); 
  }

  getFoodNamesSummary(foodNames: string[]): { summary: string, tooltip: string[] } {
    if (foodNames.length > 5) {
      const summary = foodNames.slice(0, 5).join(', ') + ', ...';
      const tooltip = foodNames.slice(5);
      return { summary, tooltip };
    } else {
      return { summary: foodNames.join(', '), tooltip: [] };
    }
  }

  showTooltip(event: MouseEvent): void {
    const target = (event.target as HTMLElement).closest('.tooltip-container');
    if (target) {
      const tooltip = target.querySelector('.tooltip') as HTMLElement;
      if (tooltip) {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
      }
    }
  }

  hideTooltip(event: MouseEvent): void {
    const target = (event.target as HTMLElement).closest('.tooltip-container');
    if (target) {
      const tooltip = target.querySelector('.tooltip') as HTMLElement;
      if (tooltip) {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
      }
    }
  }
}
