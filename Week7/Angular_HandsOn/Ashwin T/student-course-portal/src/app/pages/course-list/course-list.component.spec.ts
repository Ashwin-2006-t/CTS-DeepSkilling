import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideRouter([]),
        provideMockStore({
          initialState: {
            course: { courses: [], loading: true, error: null },
            enrollment: { enrolledCourseIds: [] }
          }
        })
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CourseListComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the loading indicator when store state is loading', () => {
    const fixture = TestBed.createComponent(CourseListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Loading courses');
  });

  it('trackByCourseId should return the course id', () => {
    const fixture = TestBed.createComponent(CourseListComponent);
    const id = fixture.componentInstance.trackByCourseId(0, {
      id: 7, name: 'X', code: 'X1', credits: 3, gradeStatus: 'pending'
    });
    expect(id).toBe(7);
  });
});
