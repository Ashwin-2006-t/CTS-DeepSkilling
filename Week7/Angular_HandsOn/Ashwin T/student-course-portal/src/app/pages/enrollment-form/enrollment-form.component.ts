import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseService } from '../../services/course.service';

/**
 * EnrollmentFormComponent — HOL 4: Template-Driven Forms & Validation.
 * Uses ngModel + ngForm; validation attributes live directly on the
 * template inputs (required, minlength, email, etc.).
 */
@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent {
  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester: 'Odd' | 'Even' = 'Odd';
  agreeToTerms = false;

  submitted = false;

  constructor(private courseService: CourseService) {}

  onSubmit(form: NgForm): void {
    console.log('Form value:', form.value);
    console.log('Form valid:', form.valid);

    if (form.invalid) {
      return;
    }

    // HOL 8 Task 1, step 81 — wire the submit handler to a real POST.
    this.courseService
      .addCourse({
        name: `Enrollment request: ${this.studentName}`,
        code: `REQ-${this.courseId}`,
        credits: 0,
        gradeStatus: 'pending'
      })
      .subscribe({
        next: () => {
          this.submitted = true;
        },
        error: (err) => console.error('Failed to submit enrollment request', err)
      });
  }
}
