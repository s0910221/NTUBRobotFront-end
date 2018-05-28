import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventyFiveComponent } from './seventy-five.component';

describe('SeventyFiveComponent', () => {
  let component: SeventyFiveComponent;
  let fixture: ComponentFixture<SeventyFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventyFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
