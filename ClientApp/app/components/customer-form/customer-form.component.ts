import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from './../../services/customer.service';
import { Customer, SaveCustomer } from './../../models/customer';
import { ToastyService } from 'ng2-toasty';

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

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private customerService: CustomerService,
        private toastyService: ToastyService) {
        this.route.params.subscribe(params => {
            this.customer.id = +params['id'] || 0;
        });
    }

    ngOnInit() {
        if (this.customer.id) {
            this.customerService.getCustomer(this.customer.id)
                .subscribe(customer => this.customer = customer);
        }
    }

    submit() {
        var result$ = (this.customer.id) ? this.customerService.update(this.customer) : this.customerService.create(this.customer);
        result$.subscribe(customer => {
            this.toastyService.success({
                title: 'Success',
                msg: 'Data was successfully saved.',
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
            });
            this.router.navigate(['/customers/', customer.id]);
        });
    }
}
