import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchatTicketParCartePage } from './achat-ticket-par-carte.page';

describe('AchatTicketParCartePage', () => {
  let component: AchatTicketParCartePage;
  let fixture: ComponentFixture<AchatTicketParCartePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatTicketParCartePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchatTicketParCartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
