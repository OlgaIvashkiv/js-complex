import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-single-user-post',
  templateUrl: './single-user-post.component.html',
  styleUrls: ['./single-user-post.component.css']
})
export class SingleUserPostComponent implements OnInit {
@Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
