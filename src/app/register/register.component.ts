import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ApiService } from "../api.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;
  user: any = {};

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public router: Router
  ) {}

  ngOnInit() {
    this.formval();
  }

  formval() {
    this.myform = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(4)]],
      lastName: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      phone: [
        "",
        [
          Validators.required,
          Validators.min(6000000000),
          Validators.max(9999999999)
        ]
      ],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  validateSignupForm() {
    if (this.myform.valid) {
      this.api.signUpGet(this.myform.value).subscribe(
        data => {
          console.log(data);
          window.alert("Registeration Successful");
          this.user = data;
        },
        err => {
          console.log(err);
        }
      );
    } else {
      window.alert("Please fill all the fields ");
    }
  }

  FetchVal() {
    this.api.signUpFetch().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  Navigate() {
    this.router.navigate(["/forgot"]);
  }
}
