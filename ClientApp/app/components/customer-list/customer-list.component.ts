import { Component, OnInit } from '@angular/core';

import { CustomerService } from './../../services/customer.service';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
    private readonly PAGE_SIZE = 5;

    queryResult: any = {};
    query: any = {
        pageSize: this.PAGE_SIZE
    };
    columns = [
        { title: 'Id', isSortable: true },
        { title: 'Name', key: 'name', isSortable: true },
        { title: 'Address', key: 'address', isSortable: true },
        { title: 'City', key: 'city', isSortable: true },
        { title: 'Phone', key: 'phone' },
        { title: 'Email', key: 'email' },
        { title: 'Social Id', key: 'socialId' },
        { title: 'Corporate', key: 'isCorporate', isSortable: true },
        { title: 'Active', key: 'isActive', isSortable: true },
        { title: 'Create Date', key: 'createDate', isSortable: true },
        { title: 'Last Update', key: 'lastUpdate', isSortable: true }
    ];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.populateCustomers();
    }

    private populateCustomers(): any {
        this.customerService.getCustomers(this.query)
            .subscribe(result => this.queryResult = result);
    }

    onFilterChange(value: any) {
        this.query.name = value;
        this.query.page = 1;
        this.populateCustomers();
    }

    resetFilter() {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE
        };
        this.populateCustomers();
    }

    sortBy(columnName: string) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        } else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.populateCustomers();
    }

    onPageChange(page: number) {
        this.query.page = page;
        this.populateCustomers();
    }
}
