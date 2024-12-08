import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDisplayComponent } from './tech-display.component';

describe('TechDisplayComponent', () => {
  let component: TechDisplayComponent;
  let fixture: ComponentFixture<TechDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
