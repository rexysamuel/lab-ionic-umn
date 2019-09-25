import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmHomePage } from './ukm-home.page';

describe('UkmHomePage', () => {
  let component: UkmHomePage;
  let fixture: ComponentFixture<UkmHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkmHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkmHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
