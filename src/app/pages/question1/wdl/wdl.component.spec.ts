import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WDLComponent } from './wdl.component';

describe('WDLComponent', () => {
  let component: WDLComponent;
  let fixture: ComponentFixture<WDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
