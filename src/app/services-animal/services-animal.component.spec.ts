import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAnimalComponent } from './services-animal.component';

describe('ServicesAnimalComponent', () => {
  let component: ServicesAnimalComponent;
  let fixture: ComponentFixture<ServicesAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
