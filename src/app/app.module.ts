import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./home/header/header.component";
import { FooterComponent } from "./home/footer/footer.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MenuComponent } from "./menu/menu.component";
import { ContentComponent } from "./dashboard/content/content.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { EventsComponent } from "./dashboard/events/events.component";
import { EventComponent } from "./dashboard/events/event/event.component";
import { EventDetailComponent } from "./dashboard/events/event/event-detail/event-detail.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { OrderComponent } from "./dashboard/orders/order/order.component";
// import { ViewComponent } from "./view/view.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MenuComponent,
    ContentComponent,
    NavigationComponent,
    EventsComponent,
    EventComponent,
    EventDetailComponent,
    ProfileComponent,
    OrdersComponent,
    RegisterComponent,
    OrderComponent
    // ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
