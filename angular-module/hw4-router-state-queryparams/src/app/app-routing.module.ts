import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./entity/user/components/all-users/all-users.component";
import {UserWithPostsComponent} from "./entity/user/components/user-details-state/user-with-posts.component";
import {UserDetailsServerRequestComponent} from "./entity/user/components/user-details-server-request/user-details-server-request.component";
import {UserDetailsUsingQueryParamsComponent} from "./entity/user/components/user-details-using-query-params/user-details-using-query-params.component";
import { UserPostsComponent } from './entity/user/components/user-posts/user-posts.component';
import {AllPostsComponent} from "./entity/post/components/all-posts/all-posts.component";
import {PostWithCommentsComponent} from "./entity/post/components/post-with-comments/post-with-comments.component";
import {AllCommentsComponent} from "./entity/comment/components/all-comments/all-comments.component";

const routes: Routes = [
  {path: 'users', component: AllUsersComponent,
        children: [
          {path: 'details/:id', component: UserWithPostsComponent},
          {path: 'emails/:id', component: UserDetailsServerRequestComponent},
          {path: 'info/:id', component: UserDetailsUsingQueryParamsComponent},
          {path: 'posts', component: UserPostsComponent}
        ]
  },
  {path: 'posts', component: AllPostsComponent,
          children:[
      {path: 'comments', component: PostWithCommentsComponent}
      ]
  },
  {path: 'comments', component: AllCommentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
