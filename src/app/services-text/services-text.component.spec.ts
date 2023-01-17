import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTextComponent } from './services-text.component';

describe('ServicesTextComponent', () => {
  let component: ServicesTextComponent;
  let fixture: ComponentFixture<ServicesTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
