import { Component } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title = 'Not Discord';

  constructor(private sidenav: SidenavService) {}
  toggleSidenav() {
    this.sidenav.toggle();
  }

}
