import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Industry} from '../shared/industry';
import { EditIndustry } from '../shared/editIndustry';
import { AllIndustry } from '../shared/AllIndustry';
@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  apiURL ="https://www.sixdev.xyz/api/v1.0/Industry/";
  id: any=';'
  constructor(private http: HttpClient) { }
  headers2= new HttpHeaders()

  .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOb3QgYXV0aG9yaXplZCIsImp0aSI6Ijg3M2RmYTIyLWFmNTEtNDFjNi04OWJiLWQyOWJmYjBiNjJiOCIsIm5Mb2dpbklEIjoiNTAiLCJTVXNlcklkIjoiNTAwMTUzZWQtMjAzMi00MGE4LWFlOGQtODBkODdiNGM4MzY4IiwiVXNlck5hbWUiOiJOb3QgYXV0aG9yaXplZCIsIlVzZXJUeXBlIjoiMyIsImlzQXV0aGVudGljYXRlZCI6InRydWUiLCJuYmYiOjE2MzUwNTg0ODUsImV4cCI6MTkzNTA1ODQ4NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiUFRDVXNlcnMifQ.hVjj_-tEgXYEwMuAmKHjtYMam8K6CibTNX0Wf7Kh89g')

  addInsdustry(industry: Industry): Observable<Industry> {
    return this.http.post<Industry>('https://www.sixdev.xyz/api/v1.0/Industry/', industry, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  editInsdustry(editIndustry: EditIndustry): Observable<EditIndustry> {
    return this.http.put<EditIndustry>(this.apiURL+this.id, editIndustry, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getAllIndustry(): Observable<AllIndustry> {
    return this.http.get<AllIndustry>('https://www.sixdev.xyz/api/v1.0/Industry/GetAll',  { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getDuplicateEducation(name: any): Observable<AllIndustry> {
    return this.http.get<AllIndustry>(this.apiURL + '/CheckDuplicateName/'+name,  { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getIndustryById(id: any): Observable<AllIndustry> {
    return this.http.get<AllIndustry>(this.apiURL + '/GetAll/'+id,  { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  DeleteIndustryById(): Observable<AllIndustry> {
    return this.http.delete<AllIndustry>(this.apiURL+this.id, { 'headers': this.headers2 })
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

