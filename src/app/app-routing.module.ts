import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EventsComponent } from "./dashboard/events/events.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotComponent } from './register/forgot/forgot.component';
// import {}  from "./register/"

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/events", component: EventsComponent },
  { path: "dashboard/profile", component: ProfileComponent },
  { path: "dashboard/orders", component: OrdersComponent },
  { path: "register", component: RegisterComponent },
  // { path: "login", component: LoginComponent },
  { path: "forgot", component: ForgotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
