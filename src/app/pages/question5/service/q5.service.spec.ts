import { TestBed, inject } from '@angular/core/testing';

import { Q5Service } from './q5.service';

describe('Q5Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Q5Service]
    });
  });

  it('should be created', inject([Q5Service], (service: Q5Service) => {
    expect(service).toBeTruthy();
  }));
});
