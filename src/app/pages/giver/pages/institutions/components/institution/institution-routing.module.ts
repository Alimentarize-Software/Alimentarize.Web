import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionComponent } from './institution.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: InstitutionComponent,
      },
      {
        path: 'doacao',
        loadChildren: () =>
          import('../donation/donation.module').then((m) => m.DonationModule),
        data: { breadcrumb: 'Doação' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {}
