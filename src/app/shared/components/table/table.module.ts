import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { StatusModule } from '../status/status.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    DropdownModule,
    StatusModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
