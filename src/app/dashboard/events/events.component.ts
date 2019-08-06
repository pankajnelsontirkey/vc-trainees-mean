import { Component, OnInit } from "@angular/core";

import { EventList } from "./eventsData";
import { EventModel } from "../../lib/eventModel";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  public eventList: EventModel[] = EventList;

  constructor() {}

  ngOnInit() {}

  /* Create Event */

  /* Edit Event */
}
