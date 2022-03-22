import { TestBed } from '@angular/core/testing';

import { ButtonServiceService } from './button-service.service';

describe('ButtonServiceService', () => {
  let service: ButtonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
