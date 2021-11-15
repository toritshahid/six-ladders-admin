import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AddCity, AllCity, CityD, CityID, EditCity } from '../shared/city';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiURL ="https://www.sixdev.xyz/api/v1.0/City";
  id: any='';
  constructor(private http: HttpClient) { }
  headers2= new HttpHeaders()
  .set('Accept','*/*')
  .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOb3QgYXV0aG9yaXplZCIsImp0aSI6Ijg3M2RmYTIyLWFmNTEtNDFjNi04OWJiLWQyOWJmYjBiNjJiOCIsIm5Mb2dpbklEIjoiNTAiLCJTVXNlcklkIjoiNTAwMTUzZWQtMjAzMi00MGE4LWFlOGQtODBkODdiNGM4MzY4IiwiVXNlck5hbWUiOiJOb3QgYXV0aG9yaXplZCIsIlVzZXJUeXBlIjoiMyIsImlzQXV0aGVudGljYXRlZCI6InRydWUiLCJuYmYiOjE2MzUwNTg0ODUsImV4cCI6MTkzNTA1ODQ4NSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiUFRDVXNlcnMifQ.hVjj_-tEgXYEwMuAmKHjtYMam8K6CibTNX0Wf7Kh89g')
  .set('Access-Control-Allow-Origin', '*')
  .set('Cache-Control','no-cache')

  addCity(city: AddCity): Observable<AddCity> {
    return this.http.post<AddCity>(this.apiURL, city, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  editCity(city: EditCity): Observable<EditCity> {
    return this.http.put<EditCity>(this.apiURL+'/'+this.id, city, { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getAllCity(): Observable<AllCity> {
    return this.http.get<AllCity>('https://www.sixdev.xyz/api/v1.0/City/GetAll', { 'headers': this.headers2 })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getDuplicateCity(name: any): Observable<CityD> {
    return this.http.get<CityD>(this.apiURL + '/CheckDuplicateName/'+name)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getCityById(id: any): Observable<CityID> {
    return this.http.get<CityID>(this.apiURL + '/GetAll/'+id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  DeleteCityId(): Observable<CityD> {
    return this.http.delete<CityD>(this.apiURL+'/'+this.id)
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

