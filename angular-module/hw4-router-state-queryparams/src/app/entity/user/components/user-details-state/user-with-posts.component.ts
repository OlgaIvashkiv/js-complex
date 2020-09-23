import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute,  Router} from "@angular/router";

import {User} from "../../../../models/user";


@Component({
  selector: 'app-user-with-posts',
  templateUrl: './user-with-posts.component.html',
  styleUrls: ['./user-with-posts.component.css']
})

export class UserWithPostsComponent{
    userFull: User
    constructor(private router: Router,
                private activatedRoute: ActivatedRoute){

      this.activatedRoute.params.subscribe(value => {
        console.log(this.router.getCurrentNavigation().extras.state)
        console.log(history.state.user)
        this.userFull=history.state.user

      })
  }

}
