import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';

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
  pages: any;
  currentPage = 1;
  totalPages: number;


  constructor(private http: Http, private contactService: ContactService,
              public router: Router) { }

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
          console.log(data);
          this.pages = new Array (data.totalPages);
        },
        err => {
          console.log('ERROR !');
        });
  }

  goToPage(index) {
    this.currentPage = index + 1;
    this.onSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['edit-contact', id]);
  }
  onDeleteContact(c: Contact) {
    const confirm = window.confirm('Êtes-vous sûr de bien vouloir supprimer cette entité ?');
    if ( confirm === true) {
      this.contactService.delete( c.id )
        .subscribe( data => {
            /*console.log(data);
            alert('SUPRESSION EFFECTUEE');
            */
            this.pageContacts.content.splice(
              this.pageContacts.content.indexOf(c), 1
            );
          },
          err => {
            console.log('ERROR DELETE');
            alert('ERROR !');
          });
    }
  }
}
