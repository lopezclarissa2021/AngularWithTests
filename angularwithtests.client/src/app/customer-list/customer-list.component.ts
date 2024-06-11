import { Component } from '@angular/core';
import { Customer } from '../Customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers: Customer[] = []

  constructor(private data: DataService) {
    this.data.addCustomer({
        firstName: "Clarissa",
        lastName: "Lopez",
        phoneNumber: "3605060229",
        id: 0
      })
  }

  addCustomer() {
    // do a thing when fired:
    let cust: Customer = {
        id: 0,
        firstName: '',
        lastName: '',
        phoneNumber: ''
    }
    this.data.addCustomer(cust);
    this.customers = this.data.customers;
  }
}
