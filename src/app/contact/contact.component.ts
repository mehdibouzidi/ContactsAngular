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
  keyword: any;
  page = 0;
  size = 5;

  constructor(private http: Http, private contactService: ContactService) { }

  ngOnInit() {
   /*this.contactService.getContacts()
      .subscribe( data => {
          this.pageContacts = data;
        },
        err => {
          console.log('ERROR !');
        });*/
  }

  onSearch() {
    console.log( this.keyword );
   this.pageContacts =  this.contactService.doSearchByKeyWord(this.keyword, this.page, this.size)
      .subscribe( data => {
        this.pageContacts = data;
      },
      err => {
        console.log('ERROR !');
      });
  }
}
