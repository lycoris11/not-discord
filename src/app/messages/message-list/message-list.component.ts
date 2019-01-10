import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  /* posts = [
    {content: 'This is the first content'},
    {content: 'This is the second content'},
    {content: 'This is the third content'}
  ]; */

  constructor() { }

  @Input() posts = [];

  ngOnInit() {
  }

}
