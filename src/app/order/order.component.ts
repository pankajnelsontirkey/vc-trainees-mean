import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  buyername = new FormControl("", [
    Validators.required,
    Validators.maxLength(15)
  ]);
  prodname = new FormControl("", Validators.required);
  email = new FormControl("", Validators.required);
  number = new FormControl("", [Validators.required, Validators.maxLength(10)]);

  constructor() {}

  ngOnInit() {}
}
