import { Component, OnInit, Input } from "@angular/core";
import { EventModel } from "../../../shared/lib/eventModel";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})
export class EventComponent implements OnInit {
  @Input() eventItem: EventModel;

  constructor() { }

  ngOnInit() { }
}
