import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { authGuard } from './core/guard/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RememberPasswordComponent } from './pages/remember-password/remember-password.component';
import { RedefinePasswordComponent } from './pages/redefine-password/redefine-password.component';
import { InstitutionsComponent } from './pages/institutions/institutions.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'inicio'
  // },
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
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [authGuard],
      },
      {
        path: 'instituicoes',
        loadChildren: () =>
          import('./pages/institutions/institutions.module').then(
            (m) => m.InstitutionsModule
          ),
        component: InstitutionsComponent,
      },
    ],
    canActivate: [authGuard],
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
