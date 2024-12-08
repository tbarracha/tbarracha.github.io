import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTypeSelectorComponent } from './project-type-selector.component';

describe('ProjectTypeSelectorComponent', () => {
  let component: ProjectTypeSelectorComponent;
  let fixture: ComponentFixture<ProjectTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTypeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
