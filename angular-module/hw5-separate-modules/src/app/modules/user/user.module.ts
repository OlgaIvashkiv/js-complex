import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import {UserService} from "./services/user.service";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { UserWithPostComponent } from './components/user-with-post/user-with-post.component';
import { SingleUserPostComponent } from './components/single-user-post/single-user-post.component';


@NgModule({
  declarations: [AllUsersComponent, SingleUserComponent, UserWithPostComponent, SingleUserPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllUsersComponent, children: [
        {path: 'posts', component: UserWithPostComponent}
        ]},

      ]
    )
  ],
  providers: [UserService]
})
export class UserModule { }
