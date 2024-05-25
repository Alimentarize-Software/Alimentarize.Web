import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent {
  @Input() status: string;

}
