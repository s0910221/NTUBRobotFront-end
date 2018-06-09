import { TestBed, inject } from '@angular/core/testing';

import { Q4Service } from './q4.service';

describe('Q4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Q4Service]
    });
  });

  it('should be created', inject([Q4Service], (service: Q4Service) => {
    expect(service).toBeTruthy();
  }));
});
