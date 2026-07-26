import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

/**
 * CourseSummaryWidgetComponent — HOL 6 Task 1, step 62.
 * Injects the SAME CourseService singleton (`providedIn: 'root'`) as
 * CourseListComponent and HomeComponent. Used to demonstrate that all
 * three components share one instance: adding a course anywhere is
 * reflected in this widget's count too.
 */
@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  templateUrl: './course-summary-widget.component.html',
  styleUrl: './course-summary-widget.component.css'
})
export class CourseSummaryWidgetComponent implements OnInit {
  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.totalCourses = courses.length),
      error: () => (this.totalCourses = 0)
    });
  }
}
