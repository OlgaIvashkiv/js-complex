import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {PostComponent} from "./components/post/post.component";

const routes: Routes = [
  {path: ':id', component: UserComponent,children: [
      {path: 'posts/:id', component: PostComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
