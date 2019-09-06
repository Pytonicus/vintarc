import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVideojuegoModalPage } from './new-videojuego-modal.page';

describe('NewVideojuegoModalPage', () => {
  let component: NewVideojuegoModalPage;
  let fixture: ComponentFixture<NewVideojuegoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVideojuegoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVideojuegoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
