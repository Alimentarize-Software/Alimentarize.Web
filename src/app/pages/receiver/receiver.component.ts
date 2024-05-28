import { Component, ElementRef, Renderer2 } from '@angular/core';
import {
  DonationItem,
  PaginationResponse,
} from 'src/app/core/model/paginationResponse.interface';
import { ReceiverService } from './receiver.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.sass'],
})
export class ReceiverComponent {
  hoverClass = 'hover-active';
  donationsSchedule: DonationItem[] = [];
  donationsHistory: DonationItem[] = [];
  userID: number;
  currentPageSchedule: number = 1;
  currentPageHistory: number = 1;

  totalPagesSchedule: number;
  totalPagesHistory: number;

  isScheduling: boolean = false;

  showModal = false;
  showSuccessModal = false;
  currentDonation: DonationItem;
  loading = true;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private receiverService: ReceiverService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const firstTab = this.el.nativeElement.querySelector('.tabs .tab');
    if (firstTab) {
      this.renderer.addClass(firstTab, this.hoverClass);
    }

    const user = localStorage.getItem('user');

    if (user) {
      const parsedUser = JSON.parse(user);

      if (parsedUser && parsedUser.id) {
        this.userID = parsedUser.id;
      } else {
        console.error('O usuário no localStorage não tem um ID válido.');
      }
    } else {
      console.error('Não há usuário armazenado no localStorage.');
    }

    this.makeRequest();
  }

  allDonationsSchedulePage(page: number = 1) {
    this.receiverService
      .getAllDonationsSchedulePage(this.userID, page)
      .subscribe({
        next: (response: PaginationResponse) => {
          const { data } = response;
          this.donationsSchedule = data.donations;
          this.currentPageSchedule = page;
          this.totalPagesSchedule = data.totalPages;
          this.loading = false;
        },
      });
  }

  allDonationsHistoryPage(page: number = 1) {
    this.receiverService
      .getAllDonationsHistoryPage(this.userID, page)
      .subscribe({
        next: (response: PaginationResponse) => {
          const { data } = response;
          this.donationsHistory = data.donations;
          this.currentPageHistory = page;
          this.totalPagesHistory = data.totalPages;
          this.loading = false;
        },
      });
  }

  makeRequest(page: number = 1) {
    if (this.isScheduling) {
      this.allDonationsSchedulePage(page);
    } else {
      this.allDonationsHistoryPage(page);
    }
  }

  onPageChange(page: number): void {
    if (this.isScheduling) {
      this.currentPageSchedule = page;
    } else {
      this.currentPageHistory = page;
    }
    this.loading = true;
    this.makeRequest(page);
  }

  public handleTabClick(event: MouseEvent): void {
    this.loading = true;
    const clickedTab = event.currentTarget as HTMLElement;

    const tabs = document.querySelectorAll('.tabs .tab');

    tabs.forEach((tab) => {
      this.renderer.removeClass(tab, this.hoverClass);
    });

    this.renderer.addClass(clickedTab, this.hoverClass);

    if (clickedTab.textContent?.trim() === 'Agendamentos') {
      this.isScheduling = true;
      this.makeRequest();
    } else if (clickedTab.textContent?.trim() === 'Histórico') {
      this.isScheduling = false;
      this.makeRequest();
    }
  }

  public isHistorySelected(): boolean {
    const sobreTab = this.el.nativeElement.querySelector(
      '.tabs .tab:nth-child(1)'
    );
    return sobreTab ? sobreTab.classList.contains(this.hoverClass) : false;
  }

  openCancelModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.makeRequest(
      this.isScheduling ? this.currentPageSchedule : this.currentPageHistory
    );
    this.showModal = false;
  }

  cancelDonation(): void {
    this.receiverService
      .updateDonationStatus(this.currentDonation.id, 'REPROVADO')
      .subscribe({
        next: () => {
          this.loading = true;
        },
      });
    this.closeModal();
    this.toastr.success('Doação recusada com sucesso!');
  }

  openSuccessModal(): void {
    this.showSuccessModal = true;
  }

  closeSuccessModal(): void {
    this.makeRequest(
      this.isScheduling ? this.currentPageSchedule : this.currentPageHistory
    );
    this.showSuccessModal = false;
  }

  getData(): DonationItem[] {
    if (this.isScheduling) {
      return this.donationsSchedule;
    }

    return this.donationsHistory;
  }

  getTotalPages(): number {
    if (this.isScheduling) {
      return this.totalPagesSchedule;
    }

    return this.totalPagesHistory;
  }

  getCurrentPage(): number {
    if (this.isScheduling) {
      return this.currentPageSchedule;
    }

    return this.currentPageHistory;
  }

  acceptDonation(): void {
    this.receiverService
      .updateDonationStatus(this.currentDonation.id, 'APROVADO')
      .subscribe({
        next: () => {
          this.loading = true;
        },
      });
    this.closeSuccessModal();
    this.toastr.success('Doação aprovada com sucesso!');
  }

  handleAction(event: any): void {
    this.currentDonation = event.donation;
    if (event.action === 'aprovar') {
      this.openSuccessModal();
    } else if (event.action === 'recusar') {
      this.openCancelModal();
    }
  }
}
