import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesTextComponent } from './advantages-text.component';

describe('AdvantagesTextComponent', () => {
  let component: AdvantagesTextComponent;
  let fixture: ComponentFixture<AdvantagesTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantagesTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantagesTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
