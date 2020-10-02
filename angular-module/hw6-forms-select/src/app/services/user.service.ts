import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getFilteredUser(id: number): Observable<User>{
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  openAllUserPosts(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }

}
