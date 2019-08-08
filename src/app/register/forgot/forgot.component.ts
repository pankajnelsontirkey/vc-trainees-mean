import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],

})
export class ForgotComponent implements OnInit {
  forgot: FormGroup
  constructor(private api: ApiService, private fb: FormBuilder) { }

  @ViewChild('forgotEmail', { static: false }) fem: ElementRef;
  recoveredPassword: string = "";

  ngOnInit() { this.forgotten() }



  recover() {
    this.api.signUpFetch().subscribe(
      data => {

        let thisUser = data.find((item) => item.email === this.fem.nativeElement.value)
        if (thisUser == undefined) {
          window.alert("Enter a Valid email address ");
        }
        this.recoveredPassword = thisUser.password;



      },
      err => {
        console.log(err)
      });


  }

  forgotten() {
    this.forgot = this.fb.group({

      email: ['', Validators.email]

    });




  }




}
