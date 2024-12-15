import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredBlobsComponent } from './colored-blobs.component';

describe('ColoredBlobsComponent', () => {
  let component: ColoredBlobsComponent;
  let fixture: ComponentFixture<ColoredBlobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoredBlobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredBlobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
