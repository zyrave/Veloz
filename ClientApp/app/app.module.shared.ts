import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';

import { AppErrorHandler } from './app.error-handler';

import { CustomerService } from './services/customer.service';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { PaginationComponent } from './components/shared/pagination.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        CustomerFormComponent,
        CustomerListComponent,
        ViewCustomerComponent,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ToastyModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'customers', component: CustomerListComponent },
            { path: 'customers/new', component: CustomerFormComponent },
            { path: 'customers/edit/:id', component: CustomerFormComponent },
            { path: 'customers/:id', component: ViewCustomerComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin },
        { provide: ErrorHandler, useClass: AppErrorHandler },
        CustomerService
    ]
})
export class AppModuleShared {
}
