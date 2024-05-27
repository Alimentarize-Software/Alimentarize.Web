import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnChanges {
  showActions: boolean = false;
  @Input() data: any[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  private _scheduling: boolean = false;
  @Output() pageChange = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateActions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['scheduling'] || changes['data']) {
      this.updateActions();
    }
  }

  @Input()
  set scheduling(value: boolean) {
    this._scheduling = value;
    this.updateActions();
  }

  get scheduling(): boolean {
    return this._scheduling;
  }

  private updateActions(): void {
    const userType = localStorage.getItem('typeUser');
    if (userType === 'receiver' && this.scheduling) {
      this.showActions = true;
    } else {
      this.showActions = false;
    }
  }

  showRow(donation: any): boolean {
    const userType = localStorage.getItem('typeUser');
    return this.scheduling || userType !== 'receiver' || donation.status !== 'PENDENTE';
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
