import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Users } from "../_model/users.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private requestUrl = 'http://localhost:3030/api/users';

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<Users> {
    return this.http.get<Users>(this.requestUrl);
  }
}
