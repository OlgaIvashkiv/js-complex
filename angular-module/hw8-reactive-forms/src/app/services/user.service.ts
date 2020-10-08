import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
URL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {

      }

  getAllUsers(): Observable<User[]>{
     return this.httpClient.get<User[]>(`${this.URL}`)
  }

  filterUser(users: User[], id: number): User[]{
    return users.filter(user=> user.id === id)
  }

}
