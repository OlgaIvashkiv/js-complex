import { Component, OnInit } from '@angular/core';
import {IToDo} from "../../../../../hw1/src/app/models/todomodel";
import {TodolistService} from "../../services/todolist.service"

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist: IToDo[]=[];

  constructor(private TodolistService:TodolistService) {
    this.TodolistService.getTodoList().subscribe(todo=>{
      console.log(todo);
      for (const key in todo) {
        this.todolist.push({id: key, ...todo[key]})
      }
      console.log(this.todolist)
    })
  }

  ngOnInit(): void {
  }

}
