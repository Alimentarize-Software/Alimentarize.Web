import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { authGuard } from './core/guard/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RememberPasswordComponent } from './pages/remember-password/remember-password.component';
import { RedefinePasswordComponent } from './pages/redefine-password/redefine-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'cadastrar',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: MainComponent,
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
