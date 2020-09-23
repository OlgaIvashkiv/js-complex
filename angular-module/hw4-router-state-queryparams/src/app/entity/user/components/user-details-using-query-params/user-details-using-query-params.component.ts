import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details-using-query-params',
  templateUrl: './user-details-using-query-params.component.html',
  styleUrls: ['./user-details-using-query-params.component.css']
})
export class UserDetailsUsingQueryParamsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value);
        console.log(this.router.getCurrentNavigation().extras.state);
      }
    )

  }

  ngOnInit(): void {
  }

}
