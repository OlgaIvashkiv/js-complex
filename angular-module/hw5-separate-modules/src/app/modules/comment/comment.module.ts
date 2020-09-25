import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';
import {CommentService} from "./services/comment.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [AllCommentsComponent, SingleCommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllCommentsComponent}
    ])
  ],
  providers: [CommentService]
})
export class CommentModule { }
