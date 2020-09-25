import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../post/services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-user-with-post',
  templateUrl: './user-with-post.component.html',
  styleUrls: ['./user-with-post.component.css']
})
export class UserWithPostComponent implements OnInit {
  userPostsList : Post[];

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value)
      this.postService.getPostByUserId(value.id).subscribe(value1 => {
        this.userPostsList = value1
      })
    })
  }

  ngOnInit(): void {
  }

}
