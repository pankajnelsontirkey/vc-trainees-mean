import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title: string = "MEAN STACK by Trainees @VC";
  public trainees: { name: string; id: number; attendance: string }[] = [
    { name: "Apoorva Singh", id: 1, attendance: "Present" },
    { name: "Himanshu Chaddha", id: 2, attendance: "" },
    { name: "Pankaj Nelson Tirkey", id: 3, attendance: "Present" },
    { name: "Randhir Sah", id: 4, attendance: "" },
    { name: "Sandeep Sarswat", id: 5, attendance: "" }
  ];
}
