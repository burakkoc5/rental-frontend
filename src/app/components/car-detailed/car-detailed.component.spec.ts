import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailedComponent } from './car-detailed.component';

describe('CarDetailedComponent', () => {
  let component: CarDetailedComponent;
  let fixture: ComponentFixture<CarDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
