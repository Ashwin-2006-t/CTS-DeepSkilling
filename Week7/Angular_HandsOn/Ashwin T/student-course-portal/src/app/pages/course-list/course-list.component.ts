import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';

/**
 * CourseListComponent — built across HOL 2, 3, 6, 7, 8 & 9.
 * Final version (HOL 9) reads courses from the NgRx store instead of
 * calling CourseService directly; the store's effect performs the
 * actual HTTP call.
 */
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  searchTerm = '';
  selectedCourseId: number | null = null;
  private routeSub?: Subscription;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    // Dispatch load; the CourseEffects will call CourseService.getCourses()
    // and populate the store via loadCoursesSuccess/loadCoursesFailure.
    this.store.dispatch(loadCourses());

    // Read the ?search= query param back out on load (HOL 7 Task 1).
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';

    // Subscribe (not snapshot) since query params can change while this
    // component stays active (e.g. repeated searches on the same route).
    this.routeSub = this.route.queryParamMap.subscribe((params) => {
      this.searchTerm = params.get('search') ?? '';
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  /** trackBy improves *ngFor performance: Angular only re-renders items
   * whose identity actually changed, instead of the whole list on any
   * array mutation. */
  trackByCourseId(_index: number, course: Course): number {
    return course.id;
  }

  onSearch(): void {
    this.router.navigate(['/courses'], { queryParams: { search: this.searchTerm || null } });
  }

  onCardClick(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }
}
