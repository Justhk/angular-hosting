import { TestBed } from '@angular/core/testing';

import { ProcessServiceService } from './process-service.service';

describe('ProcessServiceService', () => {
  let service: ProcessServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
