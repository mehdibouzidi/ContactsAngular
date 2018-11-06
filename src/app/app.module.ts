import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {ContactService} from '../services/contact.service';
import { NewContactComponent } from './new-contact/new-contact.component';
const routes: Routes = [
  {path: 'contacts', component: ContactComponent},
  {path: 'new-contact', component: NewContactComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    NewContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
