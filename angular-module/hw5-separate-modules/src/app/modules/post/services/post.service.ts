import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getPostByUserId(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);

  }
}
