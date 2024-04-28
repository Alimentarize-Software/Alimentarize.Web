import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnChanges {
  results: [] = [];

  changeValueInput(event: any) {
    console.log('Valores: ', event.target);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes: ', changes);
  }
}
