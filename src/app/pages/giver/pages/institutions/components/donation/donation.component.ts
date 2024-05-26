import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.sass'],
})
export class DonationComponent {
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

  constructor(private router: Router) {}

  deleteFoodItem(index: number) {
    this.donationList.splice(index, 1);
    console.log('deleteFoodItem: ', this.donationList);
  }

  finalizeDonation() {
    console.log('finalizeDonation');
    this.donationCompleted = true;
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
    console.log('Item: ', item);

    if (item.food && item.weight) {
      this.donationList.push({ ...item });
    }
  }

  get totalWeight() {
    let total = 0;
    this.donationList.forEach((el) => {
      total += Number(el.weight);
    });
    console.log('Total: ', total);
    return total;
  }
}
