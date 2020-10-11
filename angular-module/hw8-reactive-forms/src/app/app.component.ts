import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "./services/user.service";
import {User} from "./models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hw8-reactive-forms';
  form: FormGroup;
  selectUserId: FormControl = new FormControl(1, Validators.required);

  userList: User[];
  user: User[];

  constructor(private userService:UserService,
              private router: Router) {
    }

  submitform(form: FormGroup):void {
    console.log(form.controls.id.value);
    const userId = form.controls.id.value;
    this.router.navigate([userId]);
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => {
      this.userList=value;
    })

    this.form = new FormGroup({
      id: this.selectUserId,
    })
  }
}
