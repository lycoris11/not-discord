import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})

export class MessageCreateComponent implements OnInit {
  enteredContent = '';
  @Output() messageCreated = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onAddMessage() {
    const post = {
      content: this.enteredContent
    };
    this.messageCreated.emit(post);
  }
}
