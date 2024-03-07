import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { GiverComponent } from './giver.component';

const routes: Routes = [
  {
    path: '',
    component: GiverComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class GiverRoutingModule {}
