import {Component, Input, OnInit} from '@angular/core';

import {Post} from "../../models/post";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input() user : User

  postsList: Post[]
  constructor(private userService:UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit(): void {
  }


  goToPosts(id: number): void {
    this.router.navigate(['posts',id],
      {state: {userId:id},
        relativeTo: this.activatedRoute,

    })
    this.postService.openAllPosts(id).subscribe(value => {
      console.log(value, 'allposts');
      this.postsList = value
    })
  }
}
