import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvbuttonComponent } from './cvbutton.component';

describe('CvbuttonComponent', () => {
  let component: CvbuttonComponent;
  let fixture: ComponentFixture<CvbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
