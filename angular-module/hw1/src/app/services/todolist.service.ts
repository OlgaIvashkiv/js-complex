import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IToDo} from "../models/todomodel";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) {


  }
  getTodoList():Observable<IToDo[]>{
    return this.http.get<IToDo[]>('https://vue-js-module-http.firebaseio.com/toDoList.json')
  }
}
