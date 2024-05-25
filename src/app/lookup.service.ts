import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  private SERVER_API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  queryUserDetails(req?: any): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.SERVER_API_URL + '/posts', {
      // params: this.checkParameterType(req),
      observe: 'response',
    });
  }

  getUserById(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.SERVER_API_URL + '/posts/' + id, {
      observe: 'response',
    });
  }
}
