import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { EditEducation, Education, AllEducation, AddEducation } from '../shared/education';
@Injectable({
  providedIn: 'root'
})
export class EducationService {
  id: any ='';
  apiURL ="https://www.sixdev.xyz/api/v1.0/Education";
  constructor(private http: HttpClient) { }
  headers2= new HttpHeaders()
  .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOb3QgYXV0aG9yaXplZCIsImp0aSI6Ijg3M2RmYTIyLWFmNTEtNDFjNi04OWJiLWQyOWJmYjBiNjJiOCIsIm5Mb2dpbklEIjoiNTAiLCJTVXNlcklkIjoiNTAwMTUzZWQtMjAzMi00MGE4LWFlOGQtODBkODdiNGM4MzY4IiwiVXNlck5hbWUiOiJOb3QgYXV0aG9yaXplZCIsIlVzZXJUeXBlIjoiMyIsImlzQXV0aGVudGljYXRlZCI6InRydWUiLCJuYmYiOjE2MzUwNTg0ODUsImV4cCI6MTkzNTA1ODQ4NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiUFRDVXNlcnMifQ.hVjj_-tEgXYEwMuAmKHjtYMam8K6CibTNX0Wf7Kh89g')

  addEducation(edu: AddEducation): Observable<AddEducation> {
    console.log(edu)
    return this.http.post<AddEducation>(this.apiURL, edu, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  editEducation(edu: EditEducation): Observable<EditEducation> {
    alert("here "+edu.sTitle+" "+edu.bActive+" "+edu.nEditedBy)
    return this.http.put<EditEducation>('https://www.sixdev.xyz/api/v1.0/Education/'+this.id, edu, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getAllEducation(): Observable<AllEducation> {
    return this.http.get<AllEducation>('https://www.sixdev.xyz/api/v1.0/Education/GetAll', { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getDuplicateEducation(name: any): Observable<Education> {
    return this.http.get<Education>(this.apiURL + '/CheckDuplicateName/'+name, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getEducationById(id: any): Observable<Education> {
    return this.http.get<Education>(this.apiURL + '/GetAll/'+id, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  DeleteEducationById(): Observable<any> {
    return this.http.delete<any>('https://www.sixdev.xyz/api/v1.0/Education/'+this.id, { 'headers': this.headers2 })
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

