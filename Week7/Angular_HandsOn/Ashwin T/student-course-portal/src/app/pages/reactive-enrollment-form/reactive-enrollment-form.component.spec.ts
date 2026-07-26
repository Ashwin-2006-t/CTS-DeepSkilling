import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form.component';

describe('ReactiveEnrollmentFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveEnrollmentFormComponent]
    }).compileComponents();
  });

  it('should create and build the form on init', () => {
    const fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.enrollForm).toBeTruthy();
  });

  it('should be invalid when required fields are empty', () => {
    const fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.enrollForm.invalid).toBeTrue();
  });

  it('should flag courseId values starting with XX via the custom validator', () => {
    const fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    fixture.detectChanges();
    const courseIdControl = fixture.componentInstance.enrollForm.get('courseId')!;
    courseIdControl.setValue('XX101');
    expect(courseIdControl.errors?.['noCourseCode']).toBeTrue();
  });

  it('should flag emails containing "test@" as taken via the async validator', fakeAsync(() => {
    const fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    fixture.detectChanges();
    const emailControl = fixture.componentInstance.enrollForm.get('studentEmail')!;
    emailControl.setValue('test@example.com');
    tick(800);
    expect(emailControl.errors?.['emailTaken']).toBeTrue();
  }));

  it('should add and remove controls from the additionalCourses FormArray', () => {
    const fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.addCourse();
    expect(component.additionalCourses.length).toBe(1);

    component.removeCourse(0);
    expect(component.additionalCourses.length).toBe(0);
  });

  it('hasUnsavedChanges should reflect form dirty state (CanDeactivate guard support)', () => {
    const fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.hasUnsavedChanges()).toBeFalse();
    component.enrollForm.get('studentName')?.markAsDirty();
    expect(component.hasUnsavedChanges()).toBeTrue();
  });
});
