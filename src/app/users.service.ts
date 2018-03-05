import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './models/users';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000', {
      headers: new HttpHeaders().set('authorization', 'Bearer token'),
      params: new HttpParams().set('sort', 'asc')
    });
  }

}
