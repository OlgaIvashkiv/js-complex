import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

import {CommonModule} from "@angular/common";
import {AllUsersComponent} from "./entity/user/components/all-users/all-users.component";
import { UserComponent } from './entity/user/components/user/user.component';
import { AllPostsComponent } from './entity/post/components/all-posts/all-posts.component';
import { PostComponent } from './entity/post/components/post/post.component';
import { AllCommentsComponent } from './entity/comment/components/all-comments/all-comments.component';
import { CommentComponent } from './entity/comment/components/comment/comment.component';
import { UserWithPostsComponent } from './entity/user/components/user-details-state/user-with-posts.component';
import { PostWithCommentsComponent } from './entity/post/components/post-with-comments/post-with-comments.component';
import { UserDetailsServerRequestComponent } from './entity/user/components/user-details-server-request/user-details-server-request.component';
import { UserDetailsUsingQueryParamsComponent } from './entity/user/components/user-details-using-query-params/user-details-using-query-params.component';
import { UserPostsComponent } from './entity/user/components/user-posts/user-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    AllCommentsComponent,
    CommentComponent,
    UserWithPostsComponent,
    PostWithCommentsComponent,
    UserDetailsServerRequestComponent,
    UserDetailsUsingQueryParamsComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
