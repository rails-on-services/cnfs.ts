import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  public hasAccess(resource: string): Observable<boolean> {
    //** @todo do a call to backend and cache result */
    return of(true);
  }
}
