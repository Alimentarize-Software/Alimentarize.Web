import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { StatusModule } from '../status/status.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SkeletonModule } from '../skeleton/skeleton.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    DropdownModule,
    StatusModule,
    PaginationModule,
    SkeletonModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
