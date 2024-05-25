import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { DropdownModule } from '../dropdown/dropdown.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    DropdownModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
