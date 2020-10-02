import { Component } from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./models/user";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw6-forms-select';

  usersList: User[]

  userId: number

  user: User



  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => {
      this.usersList = value
      console.log(value)

    })
  }

  selectOption(id: number): void {
    this.userService.getFilteredUser(id).subscribe(value =>{
      this.user = value
      console.log(this.user.username,'this user')
      console.log(value)

    })

  }



}
