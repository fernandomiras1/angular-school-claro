import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './container/contacts-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ContactsListComponent,
  ],
  exports: [
    ContactsListComponent,
  ]
})
export class ContactsModule {}
