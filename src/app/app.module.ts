import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MenuComponent } from "./menu/menu.component";
import { ContentComponent } from "./dashboard/content/content.component";
import { ViewComponent } from "./view/view.component";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { EventsComponent } from "./dashboard/events/events.component";
import { EventComponent } from "./dashboard/events/event/event.component";
import { EventDetailComponent } from "./dashboard/events/event/event-detail/event-detail.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    ContentComponent,
    ViewComponent,
    HomeComponent,
    NavigationComponent,
    EventComponent,
    EventDetailComponent,
    ProfileComponent,
    EventsComponent,
    ProfileComponent,
    OrdersComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
