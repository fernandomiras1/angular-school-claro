import { Injectable } from '@angular/core';
import { Contact, PhoneType } from './../models/contact.model';
import { take } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    public selectedContact: Contact = null;
    constructor() {}

    selectContactById(id): void {
        // esto quiere decir q el contacto ya esta selecionado. lo pasamos a null
        if (this.selectedContact && this.selectedContact.id === id) {
            this.selectedContact = null;
        } else {
            this.selectedContact = this.getContacts()
                .find(contact => contact.id === id);
        }
    }

    getContacts(): Contact[] {
        return [
            new Contact(1, 'sam', 'assets/default-user.png', [
                { type: PhoneType.work, number: 854845485},
                { type: PhoneType.home, number: 4516536},
                { type: PhoneType.mobile, number: 156137445},
            ], 'fernando.miras.pc@gmail.com', 'Rio cuarto 454 barrio Juniors'),
            new Contact(2, 'Daniel', 'assets/default-user.png', [
                { type: PhoneType.mobile, number: 111223344 }
            ] ),
            new Contact(3, 'Lucas', 'assets/default-user.png', [
                {type: PhoneType.home, number: 123456789 },
                {type: PhoneType.mobile, number: 111111122 }
            ], 'lucas@email.com', 'Raval 7, 08020, Barcelona' ),
            new Contact(4, 'Martin', 'assets/default-user.png', [
                {type: PhoneType.work, number: 222334455 },
                {type: PhoneType.mobile, number: 222222222 }
            ], 'martin@email.com', 'Boquería 12, 08021, Barcelona' ),
            new Contact(5, 'Samantha', 'assets/default-user.png', [
                {type: PhoneType.work, number: 931224455 },
                {type: PhoneType.home, number: 934122233 },
                {type: PhoneType.mobile, number: 662113344 }
            ], 'samantha@email.com', 'Plaza Pau Vila 1, 08039, Barcelona' ),
            new Contact(6, 'Flor', 'assets/default-user.png', [
                {type: PhoneType.mobile, number: 939876655 },
            ], 'flor@email.com', 'Arago 356, 08032, Barcelona' ),
            new Contact(7, 'Fernando', 'assets/default-user.png', [
                {type: PhoneType.mobile, number: 939876655 },
            ], 'fer@email.com', 'Arago 356, 08032, Barcelona' ),
            new Contact(8, 'Emiliano', 'assets/default-user.png', [
                {type: PhoneType.mobile, number: 939876655 },
            ], 'emi@email.com', 'Arago 356, 08032, Barcelona' ),
            new Contact(9, 'Federico', 'assets/default-user.png', [
                {type: PhoneType.mobile, number: 939876655 },
            ], 'fede@email.com', 'Arago 356, 08032, BNC' ),
        ];
    }
}
