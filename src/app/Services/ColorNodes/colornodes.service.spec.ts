import { TestBed } from '@angular/core/testing';

import { ColornodesService } from './colornodes.service';

describe('ColornodesService', () => {
  let service: ColornodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColornodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
