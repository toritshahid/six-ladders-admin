import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../shared/User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  headers2= new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept','*/*')
  .set('Access-Control-Allow-Origin', '*')
  .set('Cache-Control','no-cache')
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>('https://www.sixdev.xyz/api/v1.0/SignUp/SignUp', JSON.stringify(user), { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  createUserByFb(user: User): Observable<User> {
    return this.http.post<User>('https://www.sixdev.xyz/api/v1.0/SignUp/SignUp', JSON.stringify(user), { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
