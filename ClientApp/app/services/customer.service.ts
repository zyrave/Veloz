import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Customer, SaveCustomer } from './../models/customer';

@Injectable()
export class CustomerService {
    private readonly customersEndPoint = '/api/customers';
    private readonly modUrl = this.originUrl + this.customersEndPoint;

    constructor(
        private http: Http,
        @Inject('ORIGIN_URL') private originUrl: string) { }

    toQueryString(obj: any) {
        var parts = [];

        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }

        return parts.join('&');
    }

    getCustomers(filter: any) {
        return this.http.get(this.modUrl + '?' + this.toQueryString(filter))
            .map(res => res.json());
    }

    getCustomer(id: number) {
        return this.http.get(this.modUrl + '/' + id)
            .map(res => res.json());
    }

    create(customer: SaveCustomer) {
        return this.http.post(this.modUrl, customer)
            .map(res => res.json());
    }

    update(customer: SaveCustomer) {
        return this.http.put(this.modUrl + '/' + customer.id, customer)
            .map(res => res.json());
    }

    delete(id: number) {
        return this.http.delete(this.modUrl + '/' + id)
            .map(res => res.json());
    }
}
