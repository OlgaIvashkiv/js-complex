import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-todo-info',
  templateUrl: './single-todo-info.component.html',
  styleUrls: ['./single-todo-info.component.css']
})
export class SingleTodoInfoComponent implements OnInit {
  id:string

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(value => {
      this.id = value.id;
    })
  }

  ngOnInit(): void {
  }

}
