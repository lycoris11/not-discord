import { Component, OnInit} from '@angular/core';
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

  constructor(public messagesService: MessagesService) { }

  ngOnInit() { }

  onAddMessage(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.messagesService.addPost(form.value.message);
  }
}
