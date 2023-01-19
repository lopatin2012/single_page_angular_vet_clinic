import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearYouComponent } from './hear-you.component';

describe('HearYouComponent', () => {
  let component: HearYouComponent;
  let fixture: ComponentFixture<HearYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
