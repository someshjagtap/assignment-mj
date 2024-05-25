import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  private SERVER_API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  createUser(obj: any): Observable<HttpResponse<any>> {
    return this.http
      .post<any>(this.SERVER_API_URL + '/posts', obj, {
        observe: 'response',
      })
      .pipe(map((res: HttpResponse<any>) => res));
  }

  updateUser(obj: any): Observable<HttpResponse<any>> {
    return this.http
      .put<any>(this.SERVER_API_URL + '/posts/' + obj.id, obj, {
        observe: 'response',
      })
      .pipe(map((res: HttpResponse<any>) => res));
  }
}
