import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';

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

  constructor(public messagesService: MessagesService) { }

  @Input() messages: Message[] = [];
  ngOnInit() {
  }

}
