import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  template: `<div appHighlight="lightblue">Hover me</div>`
})
class HostComponent {}

describe('HighlightDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent]
    }).compileComponents();
  });

  it('should set the background colour on mouseenter and clear it on mouseleave', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('div'));

    div.triggerEventHandler('mouseenter', null);
    expect(div.nativeElement.style.backgroundColor).toBe('lightblue');

    div.triggerEventHandler('mouseleave', null);
    expect(div.nativeElement.style.backgroundColor).toBe('');
  });
});
