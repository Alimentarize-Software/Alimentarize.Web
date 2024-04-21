import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionsComponent } from './institutions.component';
import { InstitutionComponent } from './components/institution/institution.component';

const routes: Routes = [
  {
    path: '',
    component: InstitutionsComponent,
    children: [
      {
        path: 'instituicao/:id',
        component: InstitutionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionsRoutingModule {}
