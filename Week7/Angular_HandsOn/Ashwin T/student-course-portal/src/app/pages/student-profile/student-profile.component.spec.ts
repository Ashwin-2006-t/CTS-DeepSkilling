import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentProfileComponent } from './student-profile.component';

describe('StudentProfileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfileComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(StudentProfileComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the empty-enrollment message when no courses are enrolled', () => {
    const fixture = TestBed.createComponent(StudentProfileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('not enrolled in any courses yet');
  });
});
