import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})

export class MessageCreateComponent implements OnInit {
  enteredContent = '';
  @Output() messageCreated = new EventEmitter<Message>();

  constructor(public messagesService: MessagesService) { }

  ngOnInit() { }

  onAddMessage(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const message: Message = {
      content: form.value.message
    };
    this.messageCreated.emit(message);
  }
}
