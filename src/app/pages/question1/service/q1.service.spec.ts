import { TestBed, inject } from '@angular/core/testing';

import { Q1Service } from './q1.service';

describe('Q1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Q1Service]
    });
  });

  it('should be created', inject([Q1Service], (service: Q1Service) => {
    expect(service).toBeTruthy();
  }));
});
