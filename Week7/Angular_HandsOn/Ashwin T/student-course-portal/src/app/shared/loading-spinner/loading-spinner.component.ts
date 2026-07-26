import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

/**
 * LoadingSpinnerComponent — HOL 8 Task 3.
 * A tiny global spinner bound to LoadingService.isLoading$ via the
 * async pipe, so it appears/disappears automatically for every
 * in-flight HTTP request (driven by loadingInterceptor).
 */
@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {
  constructor(public loadingService: LoadingService) {}
}
