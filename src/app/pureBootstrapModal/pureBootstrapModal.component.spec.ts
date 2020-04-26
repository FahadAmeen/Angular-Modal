/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PureBootstrapModalComponent } from './pureBootstrapModal.component';

describe('PureBootstrapModalComponent', () => {
  let component: PureBootstrapModalComponent;
  let fixture: ComponentFixture<PureBootstrapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureBootstrapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureBootstrapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
