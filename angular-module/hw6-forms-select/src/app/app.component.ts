import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw6-forms-select';
  xxx: string;

  checktitle():void {
    console.log(this.xxx)
  }
}