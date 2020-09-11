import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {SingleTodoComponent} from "./components/single-todo/single-todo.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todolist/:id', component: TodoListComponent, children: [
      {path: ':id', component: SingleTodoComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
