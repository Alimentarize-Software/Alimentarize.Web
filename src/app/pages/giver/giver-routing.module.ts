import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GiverComponent } from './giver.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';

const routes: Routes = [
  {
    path: 'home',
    data: { breadcrumb: 'Home' },
    component: GiverComponent,
  },
  {
    path: 'instituicoes',
    loadChildren: () =>
      import('./pages/institutions/institutions.module').then(
        (m) => m.InstitutionsModule
      ),
    data: { breadcrumb: 'Instituições' },
  },
  {
    path: 'meu-perfil',
      component: MyProfileComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiverRoutingModule {}
