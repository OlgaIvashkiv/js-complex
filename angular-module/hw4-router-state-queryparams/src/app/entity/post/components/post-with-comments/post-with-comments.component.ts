import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../../../models/comment"
import {CommentService} from "../../../comment/service/comment.service";

@Component({
  selector: 'app-post-with-comments',
  templateUrl: './post-with-comments.component.html',
  styleUrls: ['./post-with-comments.component.css']
})
export class PostWithCommentsComponent implements OnInit {
    postWithComment: Comment[]
  constructor(private activatedRoute:ActivatedRoute,
              private commentService: CommentService) {
    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value)
        this.commentService.getCommentsforPost(value.id).subscribe(value => {
          console.log(value);
          this.postWithComment = value
        })


    })

  }

  ngOnInit(): void {
  }

}
