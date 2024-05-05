import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionsComponent } from './institutions.component';
import { InstitutionComponent } from './components/institution/institution.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionsRoutingModule {}
