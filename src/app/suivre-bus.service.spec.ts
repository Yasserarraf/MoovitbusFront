import { TestBed } from '@angular/core/testing';

import { SuivreBusService } from './suivre-bus.service';

describe('SuivreBusService', () => {
  let service: SuivreBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuivreBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
