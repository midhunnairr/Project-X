import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPostComponent } from './wall-post.component';

describe('WallPostComponent', () => {
  let component: WallPostComponent;
  let fixture: ComponentFixture<WallPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
