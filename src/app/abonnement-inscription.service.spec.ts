import { TestBed } from '@angular/core/testing';

import { AbonnementInscriptionService } from './abonnement-inscription.service';

describe('AbonnementInscriptionService', () => {
  let service: AbonnementInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonnementInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
