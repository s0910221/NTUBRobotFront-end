import { TestBed, inject } from '@angular/core/testing';

import { Q3Service } from './q3.service';

describe('Q3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Q3Service]
    });
  });

  it('should be created', inject([Q3Service], (service: Q3Service) => {
    expect(service).toBeTruthy();
  }));
});
