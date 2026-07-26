import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

/**
 * StudentProfileComponent — HOL 6 Task 2, step 66.
 * Protected by authGuard (HOL 7). Displays the student's enrolled
 * courses via EnrollmentService.getEnrolledCourses(), which resolves
 * IDs into full Course objects using the injected CourseService.
 */
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {
  studentName = 'Ashwin T';
  studentEmail = 'ashwin.t@example.com';
  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getEnrolledCourses().subscribe({
      next: (courses) => (this.enrolledCourses = courses),
      error: () => (this.enrolledCourses = [])
    });
  }
}
