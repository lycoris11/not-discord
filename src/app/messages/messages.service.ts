import { Message } from './message.model';
import { Injectable } from '@angular/core';

// provide in app root so theres only one instance
@Injectable({providedIn: 'root'})
export class MessagesService {
  private messages: Message[] = [];

  getMesseges() {
    return [...this.messages];
  }

  addPost(content: string) {
    const message: Message = {content: content};
    this.messages.push(message);
  }
}
