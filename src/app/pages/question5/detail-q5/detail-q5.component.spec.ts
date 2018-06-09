import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQ5Component } from './detail-q5.component';

describe('DetailQ5Component', () => {
  let component: DetailQ5Component;
  let fixture: ComponentFixture<DetailQ5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailQ5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailQ5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
