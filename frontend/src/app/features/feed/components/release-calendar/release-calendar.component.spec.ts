import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseCalendarComponent } from './release-calendar.component';

describe('ReleaseCalendarComponent', () => {
  let component: ReleaseCalendarComponent;
  let fixture: ComponentFixture<ReleaseCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
