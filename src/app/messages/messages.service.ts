import { Message } from './message.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// provide in app root so theres only one instance
@Injectable({providedIn: 'root'})
export class MessagesService {
  private messages: Message[] = [];
  private messagesUpdated = new Subject<Message[]>();

  constructor(private http: HttpClient) {}

  getMesseges() {
    this.http
      .get<{ message: string, messages: any} >(
        'http://localhost:3000/api/messages'
      )
      .pipe(map((messageData) => {
        return messageData.messages.map(message => {
          return{
            content: message.content,
            id: message._id
          };
        });
      }))
      .subscribe((transformedMessages) => {
        this.messages = transformedMessages;
        this.messagesUpdated.next([...this.messages]);
    });
  }

  getMessageUpdateListener() {
    return this.messagesUpdated.asObservable();
  }

  addMessage(content: string) {
    const message: Message = {id: null, content: content};
    this.http
      .post<{ message: string, messageId: string }>('http://localhost:3000/api/messages', message)
      .subscribe((responseData) => {
        const id = responseData.messageId;
        message.id = id;
        this.messages.push(message);
        this.messagesUpdated.next([...this.messages]);
      });
  }

  deleteMessage(messageId: string) {
    this.http.delete('http://localhost:3000/api/messages/' + messageId)
      .subscribe(() => {
        const updatedMessages = this.messages.filter(message => message.id !== messageId);
        this.messages = updatedMessages;
        this.messagesUpdated.next([...this.messages]);
      });
  }
}
