import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {

  /* posts = [
    {content: 'This is the first content'},
    {content: 'This is the second content'},
    {content: 'This is the third content'}
  ]; */

  constructor(public messagesService: MessagesService) { }

  messages: Message[] = [];
  private messageSub: Subscription;

  ngOnInit() {
    this.messagesService.getMesseges();
    this.messageSub = this.messagesService.getMessageUpdateListener()
      .subscribe((messages: Message[]) => {
        this.messages = messages;
      });
  }

  onDelete(messageId: string) {
    this.messagesService.deleteMessage(messageId);
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

}
