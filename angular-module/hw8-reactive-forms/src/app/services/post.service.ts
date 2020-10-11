import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL = 'https://jsonplaceholder.typicode.com/posts?userId='

  constructor(private httpClient:HttpClient) {

  }

  getPostsByUserId(id: number):Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.URL}${id}`)
  }
}
