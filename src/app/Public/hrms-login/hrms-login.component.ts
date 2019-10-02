import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../public-service-get.service';
import { IProfile } from 'src/app/model/profile.model';

@Component({
  selector: 'app-hrms-login',
  templateUrl: './hrms-login.component.html',
  styleUrls: ['./hrms-login.component.css']
})
export class HrmsLoginComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private fb: FormBuilder,
     // tslint:disable-next-line:align
     private _service: ProfileService) {  }

// tslint:disable-next-line:variable-name
username: string;
password: string;
LoginForm: FormGroup;
flag: number;
// tslint:disable-next-line:variable-name

profiles: IProfile[];
  ngOnInit() {
    localStorage.clear();

    // tslint:disable-next-line: whitespace
    this._service.getProfiles().subscribe((data: IProfile[]) => {
      this.profiles = data;

// tslint:disable-next-line:align
    } );
    this.LoginForm = this.fb.group({
      username: ['', [ Validators.required, Validators.email]],
      password: ['', Validators.required],
  });

}
  login()   {

    this.username = this.LoginForm.value.username.toLowerCase();
    this.flag = 0;
// tslint:disable-next-line:align
this.profiles.map(data => {
if (  data.username.toLocaleLowerCase() === (this.username) && data.password === this.LoginForm.value.password)  {
  this.flag = 1;
  if (data.isActive) {
  localStorage.setItem('data', JSON.stringify(data));
  localStorage.setItem('role', `${data.role.toLowerCase()}`);
  this._router.navigate([`/${data.role.toLowerCase()}`]);

 }  else  {
  alert ('Your Account is not Active');
   }

}

 });
    if (!this.flag) { this.check(); }
   }

check() {
  if (!(localStorage.length) ) {
alert('Invalid  Credentials');
this.LoginForm.reset();
  }
}

    }

