import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProfile } from '../../model/profile.model';
import { range } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PostdataService } from '../postdata.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
 profile: IProfile;
  profileForm: FormGroup;
  // profileUpdated: IProfile;
  Id: number;
  // data: IProfile;
  // tslint:disable-next-line:variable-name
  constructor(private fb: FormBuilder , private _post: PostdataService , private _router: Router ) {  }
  ngOnInit(): void {

    this.profile = JSON.parse(localStorage.getItem('data'));


    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      role: ['Employee'],
      password: ['', Validators.required],
      isAbsentee: this.profile.isAbsentee,
      isActivated: this.profile.isActivated,
      isTardy: this.profile.isTardy,
      isPunctual: this.profile.isPunctual,
      isActive: this.profile.isActive,
      employeeId: this.profile.employeeId,
      });

    this.profileForm.patchValue({
        username: this.profile.username,
        firstname: this.profile.firstname,
        lastname: this.profile.lastname,
        password: this.profile.password
        });
        }




    saveProfile() {
    this._post.edit(this.profileForm.value , this.profileForm.value.employeeId)
    // tslint:disable-next-line:whitespace
    .subscribe(data => data);


    setTimeout(() => { this._router.navigate(['/public']); });

  }
}
