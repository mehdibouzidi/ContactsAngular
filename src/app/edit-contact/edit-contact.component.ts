import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactService} from '../../services/contact.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact = new Contact();
  mode = 1;
  constructor(public contactService: ContactService, public activatedRoute: ActivatedRoute) {
    console.log();
  }

  ngOnInit() {
    this.contactService.getContact(this.activatedRoute.snapshot.params['id'])
      .subscribe( data => {
          this.contact = data;
        },
        err => {
          console.log('ERROR !');
        });
  }

  updateContact() {
  }

}
