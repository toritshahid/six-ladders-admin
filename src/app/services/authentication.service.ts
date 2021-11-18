import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { User } from '../shared/User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) { }
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
  signIn(user: User) {
    return this.http.post<User>('https://api.concoursedeals.com/api/v1.0/Login/Login',JSON.stringify(user), { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    //let authToken = localStorage.getItem('access_token');
    let authToken  = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOb3QgYXV0aG9yaXplZCIsImp0aSI6Ijg3M2RmYTIyLWFmNTEtNDFjNi04OWJiLWQyOWJmYjBiNjJiOCIsIm5Mb2dpbklEIjoiNTAiLCJTVXNlcklkIjoiNTAwMTUzZWQtMjAzMi00MGE4LWFlOGQtODBkODdiNGM4MzY4IiwiVXNlck5hbWUiOiJOb3QgYXV0aG9yaXplZCIsIlVzZXJUeXBlIjoiMyIsImlzQXV0aGVudGljYXRlZCI6InRydWUiLCJuYmYiOjE2MzUwNTg0ODUsImV4cCI6MTkzNTA1ODQ4NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiUFRDVXNlcnMifQ.hVjj_-tEgXYEwMuAmKHjtYMam8K6CibTNX0Wf7Kh89g'
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }
   // User profile
   getUserProfile(id: any): any{

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
