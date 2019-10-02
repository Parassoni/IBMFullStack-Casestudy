import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoughnutChart1Component } from './my-doughnut-chart1.component';

describe('MyDoughnutChart1Component', () => {
  let component: MyDoughnutChart1Component;
  let fixture: ComponentFixture<MyDoughnutChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDoughnutChart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDoughnutChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
