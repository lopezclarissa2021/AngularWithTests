import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerListComponent } from './customer-list.component';
import { Customer } from '../Customer';
import { DataService } from '../data.service';

class MockDataService {
  customers: Customer[] = [{
    id: 0,
    firstName: 'Clarissa',
    lastName: 'Lopez',
    phoneNumber: '3605060229'
  }]

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }
}

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customer: Customer;
  let dataService: MockDataService;

  // arrange
  beforeEach(() => {
    dataService = new MockDataService();
    TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      providers: [{ provide: DataService, useValue: dataService }]
    });
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;

    customer = dataService.customers[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    // act here:

    //assert here:
    expect(component).toBeTruthy();
  });

  it('should have a customer list', () => {
    component.customers.push(customer);

    expect(component.customers).toBeDefined();
    expect(component.customers).toEqual([customer]);
    expect(component.customers[0].firstName).toEqual("Clarissa");
  });


  it('should add a new cutomer when addCutomer is fired', () => {
    component.addCustomer();

    expect(component.customers.length).toEqual(3);
  });

  it('should have customer list as heading', () => {
    // find a spec. elemant in DOM
    const heading: HTMLElement = fixture.nativeElement;
    const h1 = heading.querySelector('h1');
    // expect to contain 'customer list'
    expect(h1?.textContent).toEqual('Customer List');
  });

});
