import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from './../../services/customer.service';

@Component({
    selector: 'app-view-customer',
    templateUrl: './view-customer.component.html',
    styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
    customer: any = [];
    customerId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private customerService: CustomerService) {
        route.params.subscribe(params => {
            this.customerId = +params['id'];
            if (isNaN(this.customerId) || this.customerId <= 0) {
                router.navigate(['/customers']);
                return;
            }
        });
    }

    ngOnInit() {
        this.customerService.getCustomer(this.customerId)
            .subscribe(
            customer => this.customer = customer,
            err => {
                if (err.status == 404) {
                    this.router.navigate(['/customers']);
                    return;
                }
            });
    }
}
