import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from '../../model/profile.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input()
profiles: IProfile[];


tardy: number;
Punctuality: number;
absentee: number;
users: number;
  constructor() { }

  ngOnInit() {
    this.tardy = 0;
    this.Punctuality = 0;
    this.absentee = 0;
    this.users = 0;
console.log(this.profiles);
    this.profiles.map((data1: IProfile) => {
        this.users += 1;
        if (data1.isTardy  )  {
      this.tardy +=  1;
      }
        if (data1.isPunctual) {
     this.Punctuality +=  1;
      }
        if (data1.isAbsentee)  {
     this.absentee +=  1;
      }
    });
  }

}
