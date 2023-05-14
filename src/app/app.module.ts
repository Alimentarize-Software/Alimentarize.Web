import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiverComponent } from './pages/giver/giver.component';
import { FoodConsultingComponent } from './pages/food-consulting/food-consulting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './pages/login/login.module';
import { RouterModule } from '@angular/router';
import { RegisterModule } from './pages/register/register.module';
import { ReceiverModule } from './pages/receiver/receiver.module';
import { MainModule } from './pages/main/main.module';

@NgModule({
  declarations: [AppComponent, GiverComponent, FoodConsultingComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
