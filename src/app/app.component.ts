import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private LOGO = require('../../resources/angular-logo.png');
  navbarContacts = true;
  navbarAbout: boolean;

  onClickContacts() {
    this.navbarContacts = true;
    this.navbarAbout = false;
  }
  onClickAbout() {
    this.navbarContacts = false;
    this.navbarAbout = true;
  }
}
