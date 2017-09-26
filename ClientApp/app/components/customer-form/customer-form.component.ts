import { Component, OnInit } from '@angular/core';

import { CustomerService } from './../../services/customer.service';
import { Customer, SaveCustomer } from './../../models/customer';

@Component({
    selector: 'app-customer-form',
    templateUrl: './customer-form.component.html',
    styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
    customer: SaveCustomer = {
        id: 0,
        name: '',
        address: '',
        city: 'Bandung',
        phone: '',
        email: '',
        socialId: '',
        isCorporate: false,
        isActive: true
    };

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
    }

    submit() {
        this.customerService.create(this.customer)
            .subscribe(customer => console.log(customer));
    }
}
