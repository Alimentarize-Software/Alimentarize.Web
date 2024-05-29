import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreateDonation } from 'src/app/core/model/donation';
import { DonationService } from 'src/app/core/services/donation/donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.sass'],
})
export class DonationComponent implements OnInit {
  filterOptions: any[] = [
    { id: 'option1', label: 'Arroz', status: 'urgente' },
    { id: 'option2', label: 'Feijão', status: 'moderado' },
    { id: 'option3', label: 'Macarrão', status: 'nao_urgencia' },
  ];
  donationCompleted: boolean = false;

  donationList: any[] = [];

  item = {
    food: '',
    weight: 0,
  };

  currentId: null | number = null;
  userID: number | null = null;

  constructor(
    private router: Router,
    private donationService: DonationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentId = Number(params['id']);
    });

    const user = localStorage.getItem('user');

    if (user) {
      const parsedUser = JSON.parse(user);

      if (parsedUser && parsedUser.id) {
        this.userID = Number(parsedUser.id);
      }
    }
  }

  deleteFoodItem(index: number) {
    this.donationList.splice(index, 1);
  }

  finalizeDonation() {
    const foods: string[] = [];
    let initialValue = 0;
    const totalWeight = this.donationList.reduce(
      (total, currentValue) => total + Number(currentValue.weight),
      initialValue
    );
    this.donationList.forEach((el) => {
      foods.push(el.food);
    });

    let payload: CreateDonation = {} as CreateDonation;

    if (this.userID && this.currentId) {
      payload = {
        donorId: this.userID,
        receiverId: this.currentId,
        weight: totalWeight,
        foodNames: foods,
      };
    }

    this.donationService.createDonation(payload).subscribe({
      next: (data) => {
        this.donationCompleted = true;
      },
    });
  }

  getSvgColor(status: string): string {
    switch (status) {
      case 'urgente':
        return '#A9320C';
      case 'moderado':
        return '#FFC107';
      case 'nao_urgencia':
        return '#4CAF50';
      default:
        return '';
    }
  }

  addFood(item: any) {
    if (item.food && item.weight) {
      this.donationList.push({ ...item });
    }
  }

  get totalWeight() {
    let total = 0;
    this.donationList.forEach((el) => {
      total += Number(el.weight);
    });
    return total;
  }
}
