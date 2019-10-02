import { Component, OnInit } from '@angular/core';
import { IProfile } from '../../model/profile.model';
import { PostdataService } from '../postdata.service';
import * as CanvasJS from '../../../app/canvasjs.min.js';
import { ProfileService } from '../../Public/public-service-get.service';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
profiles: IProfile[];
show: boolean;
// profile: IProfile;
  // tslint:disable-next-line:variable-name
  constructor(private _post: PostdataService , private getData: ProfileService ) { }

  ngOnInit() {
    this.show = false;
    this.getData.getProfiles().subscribe((data: IProfile[]) => {
      this.profiles = data;
      this.show = true;
  });

  }


state(data1: IProfile, id: number, state: boolean ) {
   if (state) {
     data1.isActive = false;
   }   else {
     data1.isActive = true;
   }
   console.log(data1);
   this._post.edit(data1, id).subscribe((a) => console.log(a));
   location.reload();

}

buttonShow(data: IProfile) {
  if (data.role === 'Admin' || data.role === 'HR')  {
    return true;
  } else {
    return false;
  }
}
}
