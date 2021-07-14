import { TestBed } from '@angular/core/testing';

import { OMDbService } from './omdb.service';

describe('OMDbService', () => {
  let service: OMDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OMDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
