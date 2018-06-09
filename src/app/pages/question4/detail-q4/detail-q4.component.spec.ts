import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQ4Component } from './detail-q4.component';

describe('DetailQ4Component', () => {
  let component: DetailQ4Component;
  let fixture: ComponentFixture<DetailQ4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailQ4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailQ4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
