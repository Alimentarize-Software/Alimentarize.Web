import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionsComponent } from './institutions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: InstitutionsComponent,
      },

      {
        path: 'instituicao/:id',
        loadChildren: () =>
          import('./components/institution/institution.module').then(
            (m) => m.InstitutionModule
          ),
        data: { breadcrumb: 'Instituição' },
      },
      {
        path: 'doacao/:id',
        loadChildren: () =>
          import('./components/donation/donation.module').then(
            (m) => m.DonationModule
          ),
        data: { breadcrumb: 'Doação' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionsRoutingModule {}
