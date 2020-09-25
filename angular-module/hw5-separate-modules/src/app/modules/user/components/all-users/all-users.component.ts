import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => {
      this.userList = value;
    })

  }

  ngOnInit(): void {
  }

}
