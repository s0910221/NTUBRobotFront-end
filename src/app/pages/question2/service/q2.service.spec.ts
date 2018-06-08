import { TestBed, inject } from '@angular/core/testing';

import { Q2Service } from './q2.service';

describe('Q2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Q2Service]
    });
  });

  it('should be created', inject([Q2Service], (service: Q2Service) => {
    expect(service).toBeTruthy();
  }));
});
