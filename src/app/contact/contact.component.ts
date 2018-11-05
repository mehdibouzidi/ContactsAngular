import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-c',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  pageContacts: any;

  constructor(private http: Http, private contactService: ContactService) { }

  ngOnInit() {
      this.contactService.getContacts()
      .subscribe( data => {
          this.pageContacts = data;
/*          console.log(this.pageContent);*/
        },
        err => {
          console.log('ERROR !');
        });
  }

}
