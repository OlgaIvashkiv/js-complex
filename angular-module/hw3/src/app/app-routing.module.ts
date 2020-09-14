import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./entity/user/components/all-users/all-users.component";
import {AllPostsComponent} from "./entity/post/components/all-posts/all-posts.component";
import {AllCommentsComponent} from "./entity/comment/components/all-comments/all-comments.component";

const routes: Routes = [
  {path: 'users', component: AllUsersComponent},
  {path: 'posts', component: AllPostsComponent},
  {path: 'comments', component: AllCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
