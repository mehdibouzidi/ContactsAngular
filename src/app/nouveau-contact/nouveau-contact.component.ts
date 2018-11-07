import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {
  contact: Contact = new Contact();
  mode = 1;
  constructor(public contactService: ContactService) { }

  ngOnInit() {
  }

  createContact() {
    this.contactService.create(this.contact)
      .subscribe(data => {
          this.contact = data;
          this.mode = 2;
        },
        err => {
          console.log(JSON.parse(err.body).message);
        });
  }

}
