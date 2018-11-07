import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactService} from '../../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact = new Contact();
  mode = 1;
  constructor(public contactService: ContactService, public activatedRoute: ActivatedRoute,
              public router: Router) {
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
    this.contactService.edit(this.contact)
      .subscribe( data => {
          console.log(data);
        alert('MISE A JOUR EFFECTUEE');
        this.router.navigate( ['contacts'] );
        },
        err => {
        console.log('ERROR PUT');
          alert('ERROR !');
        });
  }

}
