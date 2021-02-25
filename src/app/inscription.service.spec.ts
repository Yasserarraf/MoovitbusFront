import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from 'imane/node_modules/@angular/core/core';
import { IonicModule } from 'imane/node_modules/@ionic/angular/ionic-angular';
import { ExploreContainerComponentModule } from 'imane/src/app/explore-container/explore-container.module';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let fixture: ComponentFixture< UserService>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();
    
      fixture = TestBed.createComponent(UserService);
      const Component= fixture.componentInstance;
      fixture.detectChanges();
    }));
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
