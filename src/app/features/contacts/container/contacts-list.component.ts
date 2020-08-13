import { Component, OnInit } from '@angular/core';
import { ContactsService } from './../services/contacts.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[] = [];
  constructor(private contctsService: ContactsService) { }

  ngOnInit(): void {
    this.contacts = this.contctsService.getContacts();
  }

  onContactSelected(id: number): void {
    this.contctsService.selectContactById(id);
    console.log('contacto', this.contctsService.selectedContact);
  }

}
