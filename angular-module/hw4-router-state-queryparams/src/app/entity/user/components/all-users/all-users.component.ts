import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../../../models/user";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  userList: User[]=[];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value =>
    this.userList = value
    )

  }

  ngOnInit(): void {
  }

}
