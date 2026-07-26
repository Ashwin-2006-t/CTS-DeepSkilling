import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(
  selectEnrollmentState,
  (state) => state.enrolledCourseIds
);

/**
 * Cross-slice selector — HOL 9 Task 2.
 * Combines the `course` and `enrollment` feature states to derive the
 * full list of enrolled Course objects, without duplicating course
 * data inside the enrollment slice.
 */
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses, enrolledIds) => courses.filter((c) => enrolledIds.includes(c.id))
);
