import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}


  ngOnInit(): void {
  }

  goToUserEmail(id:number):void {
    console.log('HEEREEE');
    this.router.navigate(['info', id], {
      relativeTo: this.activatedRoute,
      state: { userId : id}
    })
  }
}
