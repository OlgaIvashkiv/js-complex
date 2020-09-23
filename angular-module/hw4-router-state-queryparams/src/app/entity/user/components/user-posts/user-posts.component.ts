import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../post/service/post.service";
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  post: Post[]
  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value)
      this.postService.getPostByUserId(value.id).subscribe(value1 => {
        console.log(value1)
        this.post = value1
        }
      )

    })
  }

  ngOnInit(): void {
  }

}
