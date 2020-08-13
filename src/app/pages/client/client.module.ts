import { ContactsModule } from './../../features/contacts/contacts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client.routing';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ContactsModule
  ],
  declarations: [
    ClientComponent
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
