import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass'],
})
export class DropdownComponent {
  @Output() actionSelected = new EventEmitter<string>();

  handleAction(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const action = target.value;
    this.actionSelected.emit(action);
  }
}
