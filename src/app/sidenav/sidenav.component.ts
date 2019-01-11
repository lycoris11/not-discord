import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material';
import { Message } from '../messages/message.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  title = 'Not Discord';

  storedMessages: Message[] = [];

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {	}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  onMessageAdded(message) {
    this.storedMessages.push(message);
  }
}
