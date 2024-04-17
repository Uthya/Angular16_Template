import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTopComponent } from './back-top.component';

describe('BackTopComponent', () => {
  let component: BackTopComponent;
  let fixture: ComponentFixture<BackTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackTopComponent]
    });
    fixture = TestBed.createComponent(BackTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
