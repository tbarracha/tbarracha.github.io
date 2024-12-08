import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTypeButtonComponent } from './project-type-button.component';

describe('ProjectTypeButtonComponent', () => {
  let component: ProjectTypeButtonComponent;
  let fixture: ComponentFixture<ProjectTypeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTypeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTypeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
