import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

/**
 * Custom synchronous validator — HOL 5 Task 2, step 53.
 * Disallows course codes/IDs starting with the "XX" prefix.
 */
export const noCourseCodeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (value === null || value === undefined || value === '') {
    return null;
  }
  const stringValue = String(value);
  return stringValue.toUpperCase().startsWith('XX') ? { noCourseCode: true } : null;
};

/**
 * Custom async validator — HOL 5 Task 2, step 55.
 * Simulates a server-side "is this email already taken" check.
 * Async validators only run after all synchronous validators pass,
 * to avoid firing unnecessary network calls on obviously-invalid input.
 * Returns a Promise<ValidationErrors | null> as required by the exercise.
 */
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  const email = (control.value as string) ?? '';
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(email.includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}

/** Observable-returning variant, shown for completeness / unit testing. */
export function simulateEmailCheck$(control: AbstractControl): Observable<ValidationErrors | null> {
  const email = (control.value as string) ?? '';
  return of(email.includes('test@') ? { emailTaken: true } : null).pipe(delay(800));
}
