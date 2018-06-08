import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQ2Component } from './detail-q2.component';

describe('DetailQ2Component', () => {
  let component: DetailQ2Component;
  let fixture: ComponentFixture<DetailQ2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailQ2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
