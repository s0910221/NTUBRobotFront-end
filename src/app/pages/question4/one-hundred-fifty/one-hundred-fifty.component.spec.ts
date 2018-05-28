import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneHundredFiftyComponent } from './one-hundred-fifty.component';

describe('OneHundredFiftyComponent', () => {
  let component: OneHundredFiftyComponent;
  let fixture: ComponentFixture<OneHundredFiftyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneHundredFiftyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneHundredFiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
