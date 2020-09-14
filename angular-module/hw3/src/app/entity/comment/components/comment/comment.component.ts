import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../../models/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }
  @Input() comment: Comment
  ngOnInit(): void {
  }

}
