import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title: string = "MEAN STACK by Trainees @VC";
  public trainees: { name: string; id: number }[] = [
    { name: "Apoorva Singh", id: 1 },
    { name: "Himanshu Chaddha", id: 2 },
    { name: "Pankaj Nelson Tirkey", id: 3 },
    { name: "Randhir Sah", id: 4 },
    { name: "Sandeep Sarswat", id: 5 }
  ];
}
