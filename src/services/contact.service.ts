import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http){}


  getContacts() {
    return this.http.get( 'http://localhost:8080/contacts')
      .map( resp =>  resp.json() );
  }

  doSearchByKeyWord(keyword: string, page: number, size: number) {
    const url = 'http://localhost:8080/search?nom=' +
      keyword +
      '&size=' + size +
      '&page=' + page;
    console.log(url);
    return this.http.get( url)
      .map( resp =>  resp.json() );
  }


}
