import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MenuComponent } from "./menu/menu.component";
import { ContentComponent } from "./dashboard/content/content.component";
import { ViewComponent } from "./view/view.component";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { OrderComponent } from "./order/order.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { EventsComponent } from "./dashboard/events/events.component";
import { EventComponent } from "./dashboard/events/event/event.component";
import { EventDetailComponent } from "./dashboard/events/event/event-detail/event-detail.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from "./home/header/header.component";
import { FooterComponent } from "./home/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MenuComponent,
    ContentComponent,
    ViewComponent,
    NavigationComponent,
    OrderComponent,
    EventComponent,
    EventDetailComponent,
    ProfileComponent,
    ProfileComponent,
    EventsComponent,
    OrdersComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
