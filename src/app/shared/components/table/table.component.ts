import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent {
  showActions: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userType = localStorage.getItem('typeUser');
    console.log('user: ', userType);

    if (userType === 'receiver') {
      this.showActions = true;
    }
  }

  redirect(phone: string) {
    const url = `https://api.whatsapp.com/send?phone=${phone}`;
    window.open(url, '_blank');
  }
}
