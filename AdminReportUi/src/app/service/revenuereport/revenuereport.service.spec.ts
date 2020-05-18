import { TestBed } from '@angular/core/testing';

import { RevenuereportService } from './revenuereport.service';

describe('RevenuereportService', () => {
  let service: RevenuereportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevenuereportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
