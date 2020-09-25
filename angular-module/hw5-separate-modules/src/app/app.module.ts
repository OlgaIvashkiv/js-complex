import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from "./modules/user/user.module";
import {PostModule} from "./modules/post/post.module";
import {CommentModule} from "./modules/comment/comment.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    PostModule,
    CommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
