import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { EventsComponent } from "./dashboard/events/events.component";
import { EventComponent } from "./dashboard/events/event/event.component";
import { EventDetailComponent } from "./dashboard/events/event/event-detail/event-detail.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { ForgotComponent } from './register/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    EventDetailComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    EventsComponent,
    ProfileComponent,
    OrdersComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ForgotComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
