import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCommentsComponent} from "./modules/comment/components/all-comments/all-comments.component";

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m=>m.UserModule) },
  {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(m=>m.PostModule) },
  {path: 'comments', component: AllCommentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
