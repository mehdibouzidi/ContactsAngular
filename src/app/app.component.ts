import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private LOGO = require('../../resources/angular-logo.png');
  navbarContacts: boolean;
  navbarNEWContact: boolean;
  navbarNouveauContact: boolean;
  navbarAbout = true;

  onClickContacts() {
    this.navbarContacts = true;
    this.navbarAbout = false;
    this.navbarNEWContact = false;
    this.navbarNouveauContact= false;
  }
  onClickNEWContact() {
    this.navbarContacts = false;
    this.navbarAbout = false;
    this.navbarNEWContact = true;
    this.navbarNouveauContact= false;
  }
  onClickNouveauContact() {
    this.navbarContacts = false;
    this.navbarAbout = false;
    this.navbarNEWContact = false;
    this.navbarNouveauContact= true;
  }
  onClickAbout() {
    this.navbarContacts = false;
    this.navbarAbout = true;
    this.navbarNEWContact = false;
    this.navbarNouveauContact = false;
  }
}
