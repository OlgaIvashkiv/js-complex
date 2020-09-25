import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../../models/comment";

@Component({
  selector: 'app-single-comment-for-post',
  templateUrl: './single-comment-for-post.component.html',
  styleUrls: ['./single-comment-for-post.component.css']
})
export class SingleCommentForPostComponent implements OnInit {
  @Input() comment: Comment;
  constructor() { }

  ngOnInit(): void {
  }

}
