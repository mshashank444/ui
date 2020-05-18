import { TestBed } from '@angular/core/testing';

import { GeowthreportService } from './geowthreport.service';

describe('GeowthreportService', () => {
  let service: GeowthreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeowthreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
