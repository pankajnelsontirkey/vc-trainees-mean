import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  buyername = new FormControl("", [
    Validators.required,
    Validators.maxLength(15)
  ]);
  prodname = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
  number = new FormControl("", [Validators.required, Validators.maxLength(10)]);

  constructor() {}

  ngOnInit() {}
}
