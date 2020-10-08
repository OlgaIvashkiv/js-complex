import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "./services/user.service";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw8-reactive-forms';
  form: FormGroup;
  selectUserId: FormControl = new FormControl(null, Validators.required);

  userList: User[];
  user: User[];

  constructor(private userService:UserService) {

    this.form = new FormGroup({
      id: this.selectUserId,
    })

    this.userService.getAllUsers().subscribe(value => {
      this.userList=value;
    })


    }

  submitform(form: FormGroup):void {
    console.log(form.value.id)
    console.log(form)
    this.userService.getAllUsers().subscribe(users => {
      let filterUser =  this.userService.filterUser(users, +form.value.id)
       console.log(filterUser, 'filterValue');
      this.user = filterUser
      console.log(this.user,'user')
    })

  }
}
