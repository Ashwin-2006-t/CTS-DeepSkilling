import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

/**
 * errorHandlerInterceptor — HOL 8 Task 3.
 * Centralised, cross-cutting HTTP error handling:
 *   - 401 Unauthorized -> redirect to the home/login page
 *   - 500 Server Error -> log a global error notification
 * The original error is always re-thrown (`throwError`) so components
 * can still react locally (e.g. show a message) if they need to.
 */
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.warn('Unauthorized request — redirecting to home.');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('Server error — showing global notification:', error.message);
      }
      return throwError(() => error);
    })
  );
};
