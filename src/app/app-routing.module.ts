import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { EventsComponent } from "./dashboard/events/events.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { OrderComponent } from "./order/order.component";
// import { NavigationComponent } from "./navigation/navigation.component";
// import { ViewComponent } from "./view/view.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/events", component: EventsComponent },
  { path: "dashboard/profile", component: ProfileComponent },
  { path: "dashboard/orders", component: OrdersComponent },
  { path: "order", component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
