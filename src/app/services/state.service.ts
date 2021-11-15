import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { State, AddState, EditState, AllState } from '../shared/state';
@Injectable({
  providedIn: 'root'
})
export class StateService {
  id: any='';
  apiURL ="https://api.concoursedeals.com/api/v1.0/State/";
  constructor(private http: HttpClient) { }
  headers2= new HttpHeaders()
  .set('Accept','*/*')
  .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOb3QgYXV0aG9yaXplZCIsImp0aSI6Ijg3M2RmYTIyLWFmNTEtNDFjNi04OWJiLWQyOWJmYjBiNjJiOCIsIm5Mb2dpbklEIjoiNTAiLCJTVXNlcklkIjoiNTAwMTUzZWQtMjAzMi00MGE4LWFlOGQtODBkODdiNGM4MzY4IiwiVXNlck5hbWUiOiJOb3QgYXV0aG9yaXplZCIsIlVzZXJUeXBlIjoiMyIsImlzQXV0aGVudGljYXRlZCI6InRydWUiLCJuYmYiOjE2MzUwNTg0ODUsImV4cCI6MTkzNTA1ODQ4NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiUFRDVXNlcnMifQ.hVjj_-tEgXYEwMuAmKHjtYMam8K6CibTNX0Wf7Kh89g')
  .set('Access-Control-Allow-Origin', '*')
  .set('Cache-Control','no-cache')

  addState(state: AddState): Observable<AddState> {
    return this.http.post<AddState>('https://www.sixdev.xyz/api/v1.0/State', state, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  editState(state: EditState): Observable<EditState> {
    return this.http.put<EditState>('https://www.sixdev.xyz/api/v1.0/State/'+this.id, state, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getAllStates(): Observable<AllState> {
    return this.http.get<AllState>('https://www.sixdev.xyz/api/v1.0/State/GetAll',{ 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getDuplicateStates(name: any): Observable<State> {
    return this.http.get<State>(this.apiURL + '/CheckDuplicateName/'+name)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getStateById(id: any): Observable<State> {
    return this.http.get<State>(this.apiURL + 'GetAll/'+id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  DeleteStateId(): Observable<State> {
    return this.http.delete<State>('https://www.sixdev.xyz/api/v1.0/State/'+this.id,{ 'headers': this.headers2 })
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

