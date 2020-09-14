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

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    AllCommentsComponent,
    CommentComponent

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
