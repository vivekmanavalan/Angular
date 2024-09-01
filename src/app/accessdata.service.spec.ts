import { TestBed } from '@angular/core/testing';

import { AccessdataService } from './accessdata.service';

describe('AccessdataService', () => {
  let service: AccessdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
