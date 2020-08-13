import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './container/contacts-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [
    ContactsListComponent,
    ContactComponent,
    ContactDetailComponent,
  ],
  exports: [
    ContactsListComponent,
    ContactComponent,
    ContactDetailComponent
  ]
})
export class ContactsModule {}
