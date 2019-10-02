import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsLoginComponent } from './hrms-login.component';

describe('HrmsLoginComponent', () => {
  let component: HrmsLoginComponent;
  let fixture: ComponentFixture<HrmsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
