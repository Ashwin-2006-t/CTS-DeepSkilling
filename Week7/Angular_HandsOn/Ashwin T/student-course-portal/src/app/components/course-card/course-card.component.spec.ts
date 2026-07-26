import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';

const mockCourse: Course = {
  id: 1,
  name: 'Data Structures',
  code: 'CS101',
  credits: 4,
  gradeStatus: 'passed'
};

describe('CourseCardComponent', () => {
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [
        provideMockStore({
          initialState: { course: { courses: [], loading: false, error: null }, enrollment: { enrolledCourseIds: [] } }
        })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CourseCardComponent);
    fixture.componentInstance.course = mockCourse;
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the course name from @Input()', () => {
    const fixture = TestBed.createComponent(CourseCardComponent);
    fixture.componentInstance.course = mockCourse;
    fixture.detectChanges();

    const nameEl = fixture.debugElement.query(By.css('h3')).nativeElement as HTMLElement;
    expect(nameEl.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested with the course id when the Enroll button is clicked', () => {
    const fixture = TestBed.createComponent(CourseCardComponent);
    const component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');
    const enrollButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement as HTMLButtonElement;
    enrollButton.click();
    fixture.detectChanges();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should log previous/current values on ngOnChanges', () => {
    const fixture = TestBed.createComponent(CourseCardComponent);
    const component = fixture.componentInstance;
    component.course = mockCourse;
    spyOn(console, 'log');

    component.ngOnChanges({
      course: {
        previousValue: undefined,
        currentValue: mockCourse,
        firstChange: true,
        isFirstChange: () => true
      }
    });

    expect(console.log).toHaveBeenCalled();
  });
});
