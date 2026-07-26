import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';
import { noCourseCodeValidator, simulateEmailCheck } from './enrollment-validators';

/**
 * ReactiveEnrollmentFormComponent — HOL 5.
 * Rebuilds the enrollment form using FormBuilder/FormGroup instead of
 * ngModel. The entire form model lives in TypeScript, making it fully
 * unit-testable without touching the DOM. Implements
 * CanComponentDeactivate so the unsavedChangesGuard can warn the user
 * before navigating away from a dirty form.
 */
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollForm!: FormGroup;
  submittedValue: unknown = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [simulateEmailCheck]
      }),
      courseId: [null, [Validators.required, noCourseCodeValidator]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  /** Typed getter — safer than casting `enrollForm.get(...)` as FormArray
   * inline in the template every time it's referenced. */
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    if (this.enrollForm.invalid) {
      return;
    }
    // .value excludes disabled controls; .getRawValue() includes them —
    // useful when some controls are conditionally disabled but you still
    // need their value on submit.
    console.log('enrollForm.value:', this.enrollForm.value);
    console.log('enrollForm.getRawValue():', this.enrollForm.getRawValue());
    this.submittedValue = this.enrollForm.getRawValue();
    this.enrollForm.markAsPristine();
  }

  /** Required by CanComponentDeactivate / unsavedChangesGuard. */
  hasUnsavedChanges(): boolean {
    return this.enrollForm.dirty;
  }

  courseIdErrors(): AbstractControl | null {
    return this.enrollForm.get('courseId');
  }
}
