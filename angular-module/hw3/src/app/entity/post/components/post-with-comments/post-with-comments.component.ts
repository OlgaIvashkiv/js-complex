import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../service/post.service";
import {Comment} from "../../../../models/comment"

@Component({
  selector: 'app-post-with-comments',
  templateUrl: './post-with-comments.component.html',
  styleUrls: ['./post-with-comments.component.css']
})
export class PostWithCommentsComponent implements OnInit {
    postWithComment: Comment[]
    id: number
  constructor(private activatedRoute:ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value)
      this.id=value.id
        this.postService.getCommentsforPost(value.id).subscribe(value => {
          console.log(value);
          this.postWithComment = value
        })


    })

  }

  ngOnInit(): void {
  }

}
