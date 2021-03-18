import { TestBed } from '@angular/core/testing';

import { CarDetailedService } from './car-detailed.service';

describe('CarDetailedService', () => {
  let service: CarDetailedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDetailedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
