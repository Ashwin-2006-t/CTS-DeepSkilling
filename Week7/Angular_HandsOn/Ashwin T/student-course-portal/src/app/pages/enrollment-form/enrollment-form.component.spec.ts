import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnrollmentFormComponent } from './enrollment-form.component';

describe('EnrollmentFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentFormComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EnrollmentFormComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should default preferredSemester to Odd and agreeToTerms to false', () => {
    const fixture = TestBed.createComponent(EnrollmentFormComponent);
    const component = fixture.componentInstance;
    expect(component.preferredSemester).toBe('Odd');
    expect(component.agreeToTerms).toBeFalse();
  });
});
