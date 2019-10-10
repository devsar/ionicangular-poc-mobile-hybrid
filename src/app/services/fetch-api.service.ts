import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Birra } from '../tipos/birra';


@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  fetchData(url: string): Observable<object[]> {
    console.log(url);
    return this.http.get<object[]>(url, this.httpOptions);
  }

}
