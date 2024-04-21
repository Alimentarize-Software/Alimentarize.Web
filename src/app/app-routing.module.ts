import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { authGuard } from './core/guard/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RememberPasswordComponent } from './pages/remember-password/remember-password.component';
import { RedefinePasswordComponent } from './pages/redefine-password/redefine-password.component';
import { donorGuard } from './core/guard/donor.guard';
import { institutionGuard } from './core/guard/institution.guard';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'cadastrar',
    component: RegisterComponent,
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'instituicao',
        loadChildren: () =>
          import('./pages/receiver/receiver.module').then(
            (m) => m.ReceiverModule
          ),
        canActivate: [institutionGuard],
      },
      {
        path: 'doador',
        loadChildren: () =>
          import('./pages/giver/giver.module').then((m) => m.GiverModule),
        canActivate: [donorGuard],
      },
    ],
  },
  {
    path: 'esqueci-senha',
    component: RememberPasswordComponent,
  },
  {
    path: 'redefinir-senha/:token/:id',
    component: RedefinePasswordComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
