import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../service/comment.service";
import {Comment} from "../../../../models/comment";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  commentList: Comment[]=[];
  constructor(private commentService: CommentService) {
    this.commentService.getComments().subscribe(value => this.commentList=value)
  }

  ngOnInit(): void {
  }

}
