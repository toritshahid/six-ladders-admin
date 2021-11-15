import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCityCityComponent } from './delete-city-city.component';

describe('DeleteCityCityComponent', () => {
  let component: DeleteCityCityComponent;
  let fixture: ComponentFixture<DeleteCityCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCityCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCityCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
