import {Component, Input, OnInit} from '@angular/core';
import { Post } from 'src/app/models/post';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user : User

  postsList: Post
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  openPosts(id: number) {
     this.userService.openAllUserPosts(id).subscribe(
       value => {
         console.log(value);
         this.postsList = value;
       }
     )
  }
}
