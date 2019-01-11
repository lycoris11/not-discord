import { Message } from './message.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// provide in app root so theres only one instance
@Injectable({providedIn: 'root'})
export class MessagesService {
  private messages: Message[] = [];
  private messagesUpdated = new Subject<Message[]>();

  getMesseges() {
    return [...this.messages];
  }

  getMessageUpdateListener() {
    return this.messagesUpdated.asObservable();
  }

  addPost(content: string) {
    const message: Message = {content: content};
    this.messages.push(message);
    this.messagesUpdated.next([...this.messages]);
  }
}
