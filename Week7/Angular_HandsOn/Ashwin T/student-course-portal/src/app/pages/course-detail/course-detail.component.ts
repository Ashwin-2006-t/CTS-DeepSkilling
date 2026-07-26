import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

/**
 * CourseDetailComponent — HOL 7 Task 1, step 69.
 * Reads the :id route parameter and loads the matching course.
 */
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  course?: Course;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    // snapshot is fine here: this route is not reused with a changing
    // :id while the component stays mounted (Angular re-creates the
    // component when navigating between /courses/:id instances by default
    // unless route reuse strategy is customised).
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (Number.isNaN(id)) {
      this.errorMessage = 'Invalid course id.';
      return;
    }

    this.courseService.getCourseById(id).subscribe({
      next: (course) => (this.course = course),
      error: (err) => (this.errorMessage = err.message)
    });
  }
}
