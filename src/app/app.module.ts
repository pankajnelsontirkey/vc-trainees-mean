import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventsComponent } from "./events/events.component";
import { EventComponent } from "./events/event/event.component";
import { EventDetailComponent } from "./events/event/event-detail/event-detail.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    EventDetailComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
