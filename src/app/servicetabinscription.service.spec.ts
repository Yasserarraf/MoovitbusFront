import { TestBed } from '@angular/core/testing';

import { ServicetabinscriptionService } from './servicetabinscription.service';

describe('ServicetabinscriptionService', () => {
  let service: ServicetabinscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicetabinscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
