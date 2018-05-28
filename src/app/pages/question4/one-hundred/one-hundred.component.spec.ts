import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneHundredComponent } from './one-hundred.component';

describe('OneHundredComponent', () => {
  let component: OneHundredComponent;
  let fixture: ComponentFixture<OneHundredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneHundredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneHundredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
