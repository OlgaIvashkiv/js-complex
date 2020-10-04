import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './entity/post/all-posts/all-posts.component';
import { PostComponent } from './entity/post/post/post.component';

const routes: Routes = [
  {path: 'posts', component: AllPostsComponent, children: [
      {path: ':id', component: PostComponent}

    ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
