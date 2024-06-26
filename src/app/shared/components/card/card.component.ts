import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() number: number = 0;
  @Input() hasWeight: boolean = false;
}
