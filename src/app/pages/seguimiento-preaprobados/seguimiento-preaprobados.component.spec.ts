/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeguimientoPreaprobadosComponent } from './seguimiento-preaprobados.component';

describe('SeguimientoPreaprobadosComponent', () => {
  let component: SeguimientoPreaprobadosComponent;
  let fixture: ComponentFixture<SeguimientoPreaprobadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoPreaprobadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoPreaprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
