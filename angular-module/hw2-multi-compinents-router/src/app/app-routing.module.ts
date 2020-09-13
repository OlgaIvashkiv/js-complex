import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {SingleTodoComponent} from "./components/single-todo/single-todo.component";
import {SingleTodoInfoComponent} from "./components/single-todo-info/single-todo-info.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todolist', component: TodoListComponent},
  {path: 'todolist/:id', component: SingleTodoInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
