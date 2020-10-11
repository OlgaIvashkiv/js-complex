import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  constructor(private activatedRoute: ActivatedRoute,
              private postService:PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      console.log(value);
      this.postService.getPostsByUserId(value.id).subscribe(value1 => {
        this.posts=value1
      })
    })
  }

}
