import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { GiverComponent } from './pages/giver/giver.component';
import { ReceiverComponent } from './pages/receiver/receiver.component';
import { FoodConsultingComponent } from './pages/food-consulting/food-consulting.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GiverComponent,
    ReceiverComponent,
    FoodConsultingComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
