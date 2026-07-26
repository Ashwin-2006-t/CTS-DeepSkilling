import { enrollmentReducer, initialEnrollmentState } from './enrollment.reducer';
import { enrollInCourse, setEnrolledCourses, unenrollFromCourse } from './enrollment.actions';

describe('enrollmentReducer', () => {
  it('should return the initial state for an unknown action', () => {
    const state = enrollmentReducer(undefined, { type: '@@INIT' } as any);
    expect(state).toEqual(initialEnrollmentState);
  });

  it('should add a course id on enrollInCourse without duplicating', () => {
    let state = enrollmentReducer(initialEnrollmentState, enrollInCourse({ courseId: 1 }));
    state = enrollmentReducer(state, enrollInCourse({ courseId: 1 }));
    expect(state.enrolledCourseIds).toEqual([1]);
  });

  it('should remove a course id on unenrollFromCourse', () => {
    const enrolledState = { enrolledCourseIds: [1, 2] };
    const state = enrollmentReducer(enrolledState, unenrollFromCourse({ courseId: 1 }));
    expect(state.enrolledCourseIds).toEqual([2]);
  });

  it('should replace the full list on setEnrolledCourses', () => {
    const state = enrollmentReducer(initialEnrollmentState, setEnrolledCourses({ courseIds: [3, 4] }));
    expect(state.enrolledCourseIds).toEqual([3, 4]);
  });
});
