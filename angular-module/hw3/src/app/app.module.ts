import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './entity/user/components/all-users/all-users.component';
import { UserComponent } from './entity/user/components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { AllPostsComponent } from './entity/post/components/all-posts/all-posts.component';
import { PostComponent } from './entity/post/components/post/post.component';
import { AllCommentsComponent } from './entity/comment/components/all-comments/all-comments.component';
import { CommentComponent } from './entity/comment/components/comment/comment.component';
import { UserWithPostsComponent } from './entity/user/components/user-with-posts/user-with-posts.component';
import { PostWithCommentsComponent } from './entity/post/components/post-with-comments/post-with-comments.component';

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
    PostWithCommentsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
