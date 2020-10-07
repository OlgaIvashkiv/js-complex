import { Component } from '@angular/core';
import {User} from "./models/user";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw7-pipes';

  usersList: User[] = [];

  constructor(private userService: UserService) {
  this.userService.getAllUsers().subscribe(value => {
    this.usersList = value;
  })
  }


}
