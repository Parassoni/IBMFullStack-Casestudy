import { Component, OnInit } from '@angular/core';
import { IProfile } from '../../model/profile.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
data: IProfile[];

  constructor() { }

  ngOnInit() {
    this.data =   JSON.parse(localStorage.getItem('data'));



  }

}
