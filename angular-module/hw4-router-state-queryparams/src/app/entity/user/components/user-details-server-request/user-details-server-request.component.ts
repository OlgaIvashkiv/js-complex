import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../../models/user";


@Component({
  selector: 'app-user-details-server-request',
  templateUrl: './user-details-server-request.component.html',
  styleUrls: ['./user-details-server-request.component.css']
})
export class UserDetailsServerRequestComponent implements OnInit {
  userEmail: User
  constructor(private userService:UserService,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.userService.getUserById(value.id).subscribe(value1 => {
        console.log(value1);
        this.userEmail = value1
      })

      }
    )
  }

  ngOnInit(): void {
  }

}
