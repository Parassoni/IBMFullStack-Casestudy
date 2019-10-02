import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from '../../model/profile.model';
@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {
  @Input()
  data: IProfile[];

  active: number;
Inactive: number;


  public doughnutChartLabels = ['Active', 'InActive'];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  constructor() { }
  ngOnInit() {
    this.active = 0;
    this.Inactive = 0;

    this.data.map((data1: IProfile) => {
       if (data1.isActive )  {
      this.active +=  1;
      }   else {
        this.Inactive += 1;
      }

    });
    this.doughnutChartData.push(this.active, this.Inactive);

  }
}
