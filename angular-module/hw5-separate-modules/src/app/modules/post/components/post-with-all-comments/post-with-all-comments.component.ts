import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../../comment/services/comment.service";
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../../../models/comment";

@Component({
  selector: 'app-post-with-all-comments',
  templateUrl: './post-with-all-comments.component.html',
  styleUrls: ['./post-with-all-comments.component.css']
})
export class PostWithAllCommentsComponent implements OnInit {
  postwithcommentsList : Comment[];

  constructor(private commentService: CommentService,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value);
      this.commentService.getCommentsforPostById(value.id).subscribe(value1 => {
        this.postwithcommentsList = value1
      })
    })
  }

  ngOnInit(): void {
  }

}
