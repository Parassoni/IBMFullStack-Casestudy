import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from '../../model/profile.model';
@Component({
  selector: 'app-my-doughnut-char',
  templateUrl: './my-doughnut-chart1.component.html',
  styleUrls: ['./my-doughnut-chart1.component.css']
})
export class MyDoughnutComponent implements OnInit {
  @Input()
  data: IProfile[];

  tardy: number;
  Punctual: number;
  absentee: number;


  // tslint:disable-next-line:align


  public doughnutChartLabels = ['Tardy', 'Punctual', 'Absentee'];
  public doughnutChartData = [];
  public doughnutChartType = 'pie';

constructor() { }
ngOnInit() {
    this.tardy = 0;
    this.Punctual = 0;
    this.absentee = 0;

    this.data.map((data1: IProfile) => {
      if (data1.isTardy  )  {
      this.tardy +=  1;
      }
      if (data1.isPunctual) {
     this.Punctual +=  1;
      }
      if (data1.isAbsentee)  {
     this.absentee +=  1;
      }
    });
    this.doughnutChartData.push(this.tardy, this.Punctual, this.absentee);

  }
}
