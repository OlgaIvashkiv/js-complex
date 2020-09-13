import {Component, Input, OnInit} from '@angular/core';
import {IToDo} from "../../models/todomodel";
import {TodolistService} from "../../services/todolist.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
  }

}
