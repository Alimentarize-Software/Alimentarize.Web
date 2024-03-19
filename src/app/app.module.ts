import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodConsultingComponent } from './pages/food-consulting/food-consulting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './pages/login/login.module';
import { RouterModule } from '@angular/router';
import { RegisterModule } from './pages/register/register.module';
import { ReceiverModule } from './pages/receiver/receiver.module';
import { MainModule } from './pages/main/main.module';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import { RememberPasswordModule } from './pages/remember-password/remember-password.module';
import { RedefinePasswordModule } from './pages/redefine-password/redefine-password.module';
import { GiverModule } from './pages/giver/giver.module';
import { TableModule } from './shared/table/table.module';

@NgModule({
  declarations: [AppComponent, FoodConsultingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    RouterModule,
    RegisterModule,
    ReceiverModule,
    MainModule,
    PageNotFoundModule,
    RememberPasswordModule,
    RedefinePasswordModule,
    GiverModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
