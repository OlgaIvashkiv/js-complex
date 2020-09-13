import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IToDo} from "../../models/todomodel";


@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {
  @Input() todo: IToDo


  ngOnInit(): void {
  }

}
