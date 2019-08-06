import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { from } from "rxjs";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ViewComponent } from "./view/view.component";
import { HomeComponent } from "./home/home.component";
import { EventsComponent } from "./dashboard/events/events.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  /* { path: "view", component: ViewComponent }, */
  { path: "", component: HomeComponent },
  { path: "dashboard/events", component: EventsComponent },
  { path: "dashboard/profile", component: ProfileComponent },
  { path: "dashboard/orders", component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
