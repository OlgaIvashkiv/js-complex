import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/user";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  @Input() user: User

  constructor() { }

  ngOnInit(): void {
  }

}
