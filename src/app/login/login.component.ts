import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";
// import { User } from '../user';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  loginForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    // console.log(this.loginForm.value);
    /* HTTP Request from users db to check username/password */
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl("/admin");
  }

  CheckLogin() {
    var mail = (<HTMLInputElement>document.getElementById("email")).value;
    var pass = (<HTMLInputElement>document.getElementById("password")).value;

    if (mail == "Sandeep@vinove.com" && pass == "vinove") {
      console.log("validated");
    }
  }
}
