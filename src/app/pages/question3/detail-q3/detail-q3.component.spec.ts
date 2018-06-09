import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQ3Component } from './detail-q3.component';

describe('DetailQ3Component', () => {
  let component: DetailQ3Component;
  let fixture: ComponentFixture<DetailQ3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailQ3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailQ3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
