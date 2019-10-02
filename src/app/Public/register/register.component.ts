import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateProfileService } from '../create-profile.service';
import { IProfile } from '../../model/profile.model';
import { range } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm: FormGroup;
  Id: number;
  // data: IProfile;
  // tslint:disable-next-line:variable-name
  constructor(private fb: FormBuilder , private _createProfile: CreateProfileService , private _router: Router) {  }
  ngOnInit(): void {
this.Id = this.getRandomArbitrary(10, 100);
this.profileForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      isAbsentee: ['false'],
      isActivated: ['false'],
      isTardy: ['false'],
      isPunctual: ['true'],
      isActive: ['false'],
      employeeId: [this.Id]
      });
  }
 getRandomArbitrary = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  get function()  {
return this.profileForm.controls;
  }

  saveProfile() {


    this._createProfile.createProduct(this.profileForm.value).subscribe(data => (data));
    alert("You have Registered");
    setTimeout(() => { this._router.navigate(['/public']);

    }, 2000);

  }


}
