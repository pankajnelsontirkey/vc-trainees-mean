import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./order/order.component";
import { EventsComponent } from "./dashboard/events/events.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
// import { NavigationComponent } from "./navigation/navigation.component";
// import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },

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
