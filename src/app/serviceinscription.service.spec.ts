import { TestBed } from '@angular/core/testing';

import { ServiceinscriptionService } from './serviceinscription.service';

describe('ServiceinscriptionService', () => {
  let service: ServiceinscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceinscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
