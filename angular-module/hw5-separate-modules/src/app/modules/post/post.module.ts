import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {PostService} from "./services/post.service";
import { PostWithAllCommentsComponent } from './components/post-with-all-comments/post-with-all-comments.component';
import { SingleCommentForPostComponent } from './components/single-comment-for-post/single-comment-for-post.component';



@NgModule({
  declarations: [AllPostsComponent, SinglePostComponent, PostWithAllCommentsComponent, SingleCommentForPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
        {path: '', component: AllPostsComponent, children: [
            {path: 'comments', component: PostWithAllCommentsComponent}
          ]},

      ]
    )
  ],
  providers: [PostService]
})
export class PostModule { }
