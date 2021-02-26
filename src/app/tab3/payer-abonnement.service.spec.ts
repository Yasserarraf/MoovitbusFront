import { TestBed } from '@angular/core/testing';

import { PayerAbonnementService } from './payer-abonnement.service';

describe('SuivreBusService', () => {
  let service: PayerAbonnementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayerAbonnementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
