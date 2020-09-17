import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../models/user";
import {Post} from "../../../models/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<User[]>{
     return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  getPostById(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);

  }
}
