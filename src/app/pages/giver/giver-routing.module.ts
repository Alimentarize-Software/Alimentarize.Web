import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionsComponent } from './pages/institutions/institutions.component';
import { GiverComponent } from './giver.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GiverComponent,
      },
      {
        path: 'instituicoes',
        component: InstitutionsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiverRoutingModule {}
