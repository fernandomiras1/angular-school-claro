import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client.routing';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [
    ClientComponent
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
