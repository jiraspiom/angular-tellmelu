/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SegredoComponent } from './segredo.component';

describe('SegredoComponent', () => {
  let component: SegredoComponent;
  let fixture: ComponentFixture<SegredoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegredoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegredoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
