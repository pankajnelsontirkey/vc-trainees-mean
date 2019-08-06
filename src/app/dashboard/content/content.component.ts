import { Component, OnInit } from "@angular/core";
import { ApiServiceService } from "../../api-service.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  events: any;
  constructor(private api: ApiServiceService) {
    this.api.listOfEvents().subscribe(
      data => {
        console.log(data);
        this.events = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {}
}
