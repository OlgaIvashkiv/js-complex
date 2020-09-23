import { Component, OnInit } from '@angular/core';
import {PostService} from "../../service/post.service";
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  postList: Post[]=[]
  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => this.postList = value)

  }

  ngOnInit(): void {
  }

}
