import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** NotFoundComponent — HOL 7 Task 1, wildcard ** route. */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {}
