import { Component, ElementRef, Renderer2 } from '@angular/core';
import {
  DonationItem,
  PaginationResponse,
} from 'src/app/core/model/paginationResponse.interface';
import { ReceiverService } from './receiver.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.sass'],
})
export class ReceiverComponent {
  hoverClass = 'hover-active';
  donations: DonationItem[] = [];
  userID: number;
  currentPage: number = 1;
  totalPages: number;
  isScheduling: boolean = false;
  showModal = false;
  showSuccessModal = false;
  currentDonation: DonationItem;
  loading = true;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private receiverService: ReceiverService
  ) {}

  ngOnInit(): void {
    console.log(this.loading);
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

    this.allDonations();
  }

  allDonations(page: number = 1) {
    this.receiverService.getAllDonations(this.userID, page).subscribe({
      next: (response: PaginationResponse) => {
        const { data } = response;
        this.donations = data.donations;
        this.currentPage = page;
        this.totalPages = data.totalPages;
        this.loading = false;
      },
    });
  }

  onPageChange(page: number): void {
    this.allDonations(page);
  }

  public handleTabClick(event: MouseEvent): void {
    const clickedTab = event.currentTarget as HTMLElement;

    const tabs = document.querySelectorAll('.tabs .tab');

    tabs.forEach((tab) => {
      this.renderer.removeClass(tab, this.hoverClass);
    });

    this.renderer.addClass(clickedTab, this.hoverClass);

    if (clickedTab.textContent?.trim() === 'Agendamentos') {
      this.isScheduling = true;
    } else if (clickedTab.textContent?.trim() === 'Histórico') {
      this.isScheduling = false;
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
    this.allDonations(this.currentPage);
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
  }

  openSuccessModal(): void {
    this.showSuccessModal = true;
  }

  closeSuccessModal(): void {
    this.allDonations(this.currentPage);
    this.showSuccessModal = false;
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
