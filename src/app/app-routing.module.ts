import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { from } from "rxjs";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ViewComponent } from "./view/view.component";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { OrderComponent } from "./order/order.component";
import { EventsComponent } from "./dashboard/events/events.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";

const routes: Routes = [
  { path: "", redirectTo: "home" },
  { path: "sum", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  // { path: "view", component: ViewComponent },
  // { path: "navigation", component: NavigationComponent },
  { path: "order", component: OrderComponent },
  { path: "dashboard/events", component: EventsComponent },
  { path: "dashboard/profile", component: ProfileComponent },
  { path: "dashboard/orders", component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
