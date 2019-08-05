import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, RequiredValidator, FormControl } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;
  user: any = {}

  constructor(private fb: FormBuilder, private api: ApiService) {
  }

  ngOnInit() {

    this.formval();


  }

  formval() {
    this.myform = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]



    });

  }


  validateSignupForm() {

    this.api.signUpGet(this.myform.value).subscribe(
      data => {
        console.log(data)
        window.alert("Registeration Successful")
        this.user = data;
      },
      err => {
        console.log(err)
      });

  }

  FetchVal() {

    this.api.signUpFetch().subscribe(
      data => {

        console.log(data);

      },
      err => {
        console.log(err)
      });
  }


  get f() {
    return this.myform;
  }






}


