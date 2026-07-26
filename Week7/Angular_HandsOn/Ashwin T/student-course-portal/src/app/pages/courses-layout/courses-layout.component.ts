import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * CoursesLayoutComponent — HOL 7 Task 1, step 72.
 * Parent for the nested /courses routes: renders a <router-outlet>
 * so both the list (/courses) and detail (/courses/:id) views can
 * share this shell.
 */
@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './courses-layout.component.html',
  styleUrl: './courses-layout.component.css'
})
export class CoursesLayoutComponent {}
