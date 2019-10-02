import { Component, OnInit } from '@angular/core';


import { IProfile } from '../../model/profile.model';

import { PostdataService } from '../postdata.service';
import { ProfileService } from '../../Public/public-service-get.service';
@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {
  // tslint:disable-next-line:variable-name
show: boolean;
profiles: IProfile[];

  // tslint:disable-next-line:variable-name
  constructor(private _post: PostdataService , private getData: ProfileService) { }

  ngOnInit() {
this.show = false;
    // this._eventAggregator.onSideNavToggle().subscribe((opening) => {this.profiles = opening;  } );

  // this._eventAggregator.subscribe((a) => {
    //   localStorage.setItem('data', JSON.stringify(a));
    //   });

    //   // console.log(this.a);
this.getData.getProfiles().subscribe((data: IProfile[]) => {
      this.profiles = data;
this.show = true;
});
  }


Absent(data: IProfile, id: number , property: boolean, fat: string) {
console.log(fat);

if (property === true)  {
  data.isAbsentee = false;
  } else {
    data.isAbsentee = true;
  }
this._post.edit(data , id).subscribe((a) => location.reload());

}
Tardy(data: IProfile, id: number , property: boolean) {

  if (property === true)  {
    data.isTardy = false;
  } else {
    data.isTardy = true;
  }
  this._post.edit(data , id).subscribe((a) => location.reload());

}
Punctual(data: IProfile, id: number , property: boolean) {
  if (property)   {
    data.isPunctual = false;
  } else {
    data.isPunctual = true;
}
  this._post.edit(data , id).subscribe((a) => location.reload());
}


}

