import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { convertToParamMap } from '@angular/router';
import { CourseDetailComponent } from './course-detail.component';

describe('CourseDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailComponent, HttpClientTestingModule],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '1' }) }
          }
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CourseDetailComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
