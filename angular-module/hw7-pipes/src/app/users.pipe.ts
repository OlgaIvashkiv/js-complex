import { Pipe, PipeTransform } from '@angular/core';
import {User} from "./models/user";

@Pipe({
  name: 'usersPipe'
})
export class UsersPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): any {
    let newUser = '';
    value.forEach(user => {
      newUser += `<div>
                       <p>${user.id} My name is ${user.name} </p>
                       <p>My email: ${user.email}</p>
                  </div>`
    })
    return newUser
  }
}


