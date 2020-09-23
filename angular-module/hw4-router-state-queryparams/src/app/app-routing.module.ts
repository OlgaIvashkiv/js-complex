import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./entity/user/components/all-users/all-users.component";
import {UserWithPostsComponent} from "./entity/user/components/user-details-state/user-with-posts.component";
import {UserDetailsServerRequestComponent} from "./entity/user/components/user-details-server-request/user-details-server-request.component";
import {UserDetailsUsingQueryParamsComponent} from "./entity/user/components/user-details-using-query-params/user-details-using-query-params.component";

const routes: Routes = [
  {path: 'users', component: AllUsersComponent,
        children: [
          {path: 'details/:id', component: UserWithPostsComponent},
          {path: 'emails/:id', component: UserDetailsServerRequestComponent},
          {path: 'info/:id', component: UserDetailsUsingQueryParamsComponent}
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
