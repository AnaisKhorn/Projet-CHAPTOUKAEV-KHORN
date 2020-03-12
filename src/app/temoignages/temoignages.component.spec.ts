/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemoignagesComponent } from './temoignages.component';

describe('TemoignagesComponent', () => {
  let component: TemoignagesComponent;
  let fixture: ComponentFixture<TemoignagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemoignagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoignagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
