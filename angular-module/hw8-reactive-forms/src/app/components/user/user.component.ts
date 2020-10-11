import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   user: User[];

  constructor(private activatedRoute:ActivatedRoute,
              private router: Router,
              private userService:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.userService.getAllUsers().subscribe(users =>{
        const filterUser =  this.userService.filterUser(users, +value.id);
        this.user = filterUser

      })
    })
  }

  getPosts(id:number): void {
      this.router.navigate(['posts',id], {
        relativeTo: this.activatedRoute,
        state: {userId:id}
      })

  }
}
