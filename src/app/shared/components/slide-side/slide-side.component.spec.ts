import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSideComponent } from './slide-side.component';

describe('SlideSideComponent', () => {
  let component: SlideSideComponent;
  let fixture: ComponentFixture<SlideSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideSideComponent]
    });
    fixture = TestBed.createComponent(SlideSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
