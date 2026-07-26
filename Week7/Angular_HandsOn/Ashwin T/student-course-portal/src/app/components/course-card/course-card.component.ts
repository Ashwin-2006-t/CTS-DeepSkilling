import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

/**
 * CourseCardComponent — the most feature-dense component in the portal.
 * Combines concepts from HOL 2 (@Input/@Output, ngOnChanges),
 * HOL 3 (*ngSwitch badges, ngClass/ngStyle, custom directive & pipe),
 * and HOL 9 (dispatching enroll/unenroll to the NgRx store).
 */
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  /** HOL 3 Task 2: toggled via the "Show Details" button. */
  isExpanded = false;

  /** Async stream of currently-enrolled course IDs, from the NgRx store. */
  enrolledIds$: Observable<number[]>;
  isEnrolled$: Observable<boolean>;

  constructor(private store: Store) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
    this.isEnrolled$ = this.enrolledIds$.pipe(
      map((ids) => !!this.course && ids.includes(this.course.id))
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log(
        'CourseCardComponent course changed. Previous:',
        changes['course'].previousValue,
        'Current:',
        changes['course'].currentValue
      );
    }
  }

  /** HOL 3 Task 2 — object binding refactored into a getter so the
   * template stays clean and free of inline conditional logic. */
  get cardClasses(): Record<string, boolean> {
    return {
      'card--enrolled': !!this.course?.enrolled,
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get borderColor(): string {
    switch (this.course?.gradeStatus) {
      case 'passed':
        return 'green';
      case 'failed':
        return 'red';
      default:
        return 'grey';
    }
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(isEnrolled: boolean): void {
    if (isEnrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
    }
    this.enrollRequested.emit(this.course.id);
  }
}
