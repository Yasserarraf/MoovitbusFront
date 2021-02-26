import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchatTicketParSoldePage } from './achat-ticket-par-solde.page';

describe('AchatTicketParSoldePage', () => {
  let component: AchatTicketParSoldePage;
  let fixture: ComponentFixture<AchatTicketParSoldePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatTicketParSoldePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchatTicketParSoldePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
