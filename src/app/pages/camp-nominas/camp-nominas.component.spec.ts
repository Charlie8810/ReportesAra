/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CampNominasComponent } from './camp-nominas.component';

describe('CampNominasComponent', () => {
  let component: CampNominasComponent;
  let fixture: ComponentFixture<CampNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
