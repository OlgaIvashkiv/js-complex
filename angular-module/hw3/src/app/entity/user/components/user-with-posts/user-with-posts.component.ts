import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-user-with-posts',
  templateUrl: './user-with-posts.component.html',
  styleUrls: ['./user-with-posts.component.css']
})

export class UserWithPostsComponent{
    userWithPost: Post[]=[]
    id: number
    constructor(private activatedRoute: ActivatedRoute,private userService: UserService){
    this.activatedRoute.params.subscribe(value => {
      console.log(value);
      this.id=value.id
      this.userService.getPostById(value.id).subscribe(value => {
        this.userWithPost = value
      })
    })
  }

}
