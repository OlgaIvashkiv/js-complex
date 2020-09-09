import { Component } from '@angular/core';
import {IToDo} from "./models/todomodel";
import {TodolistService} from "./services/todolist.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw1';
  todolist: IToDo[]=[];

  constructor(private TodolistService:TodolistService) {
    this.TodolistService.getTodoList().subscribe(todo=>{
      console.log(todo)
    })
  }
}
