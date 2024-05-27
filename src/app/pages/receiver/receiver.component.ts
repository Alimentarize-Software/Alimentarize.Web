import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DonationItem, PaginationResponse } from 'src/app/core/model/paginationResponse.interface';
import { ReceiverService } from './receiver.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.sass']
})
export class ReceiverComponent {
  hoverClass = 'hover-active';
  donations: DonationItem[] = [];
  userID: number;
  currentPage: number = 1;
  totalPages: number;
  isScheduling: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef, private receiverService: ReceiverService,) {}

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

    this.allDonations();
  }

  allDonations(page: number = 1) {
    this.receiverService.getAllDonations(this.userID, page).subscribe({
      next: (response: PaginationResponse) => {
        const { data } = response;
        // console.log('DATA: ', data);
        // console.log('RESPONSE: ', response);
        this.donations = data.donations;
        this.currentPage = page;
        this.totalPages = data.totalPages;
      },
    });
  }

  onPageChange(page: number): void {
    this.allDonations(page);
  }

  public handleTabClick(event: MouseEvent): void {
    const clickedTab = event.currentTarget as HTMLElement;

    const tabs = document.querySelectorAll('.tabs .tab');
    tabs.forEach(tab => {
      this.renderer.removeClass(tab, this.hoverClass);
    });

    this.renderer.addClass(clickedTab, this.hoverClass);

    if (clickedTab.textContent?.trim() === 'Agendamentos') {
      this.isScheduling = true;
    } else if (clickedTab.textContent?.trim() === 'Histórico') {
      this.isScheduling = false;
    }
    // console.log('isScheduling: ', this.isScheduling);
  }

}
