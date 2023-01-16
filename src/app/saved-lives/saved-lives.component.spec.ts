import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedLivesComponent } from './saved-lives.component';

describe('SavedLivesComponent', () => {
  let component: SavedLivesComponent;
  let fixture: ComponentFixture<SavedLivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedLivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedLivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
