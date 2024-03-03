import { TestBed } from '@angular/core/testing';

import { KeluhanService } from './keluhan.service';

describe('KeluhanService', () => {
  let service: KeluhanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeluhanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
