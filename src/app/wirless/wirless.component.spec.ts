import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WirlessComponent } from './wirless.component';

describe('WirlessComponent', () => {
  let component: WirlessComponent;
  let fixture: ComponentFixture<WirlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WirlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
