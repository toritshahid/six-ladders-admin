import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndustryComponent } from './view-industry.component';

describe('ViewIndustryComponent', () => {
  let component: ViewIndustryComponent;
  let fixture: ComponentFixture<ViewIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
