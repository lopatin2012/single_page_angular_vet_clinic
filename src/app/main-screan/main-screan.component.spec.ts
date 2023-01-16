import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreanComponent } from './main-screan.component';

describe('MainScreanComponent', () => {
  let component: MainScreanComponent;
  let fixture: ComponentFixture<MainScreanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScreanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainScreanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
