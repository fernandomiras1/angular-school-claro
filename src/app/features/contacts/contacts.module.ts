import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './container/contacts-list.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ContactsListComponent,
    ContactComponent,
  ],
  exports: [
    ContactsListComponent,
    ContactComponent
  ]
})
export class ContactsModule {}
