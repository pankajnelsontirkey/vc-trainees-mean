import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "./../api-service.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //events:any;
  collapsed:boolean=false;
  events:[];
  constructor(private api: ApiServiceService) { 

    this.api.listOfEvents().subscribe(
      data => {
        console.log(data)
        this.events = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  ngOnInit() {
  }

}
