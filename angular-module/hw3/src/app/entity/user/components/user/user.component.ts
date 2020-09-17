import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/user";
import {UserService} from "../../service/user.service";
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  postsList: Post[]=[];
  constructor(private userService: UserService) {
    // this.userService.getPostById(id).subscribe(
    //   value => console.log(value)
    // )

  }
  @Input() user: User

  ngOnInit(): void {
  }

}
