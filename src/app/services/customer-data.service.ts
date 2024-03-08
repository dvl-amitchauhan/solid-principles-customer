
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CustomerContactDetails, GetCustomer, GetCustomerById } from '../models/customer-list';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService implements GetCustomer, GetCustomerById {
viewCustomerDetails = new BehaviorSubject<number>(0)

customerData:CustomerContactDetails[] = [{
  "name": "John Doe",
  "age": 33,
  "email": "john.doe@example.com",
  "profession": "Software Developer"
},
{
  "name": "Alice Smith",
  "age": 35,
  "email": "alice.smith@example.com",
  "profession": "Marketing Specialist"
},
{
  "name": "Bob Johnson",
  "age": 30,
  "email": "bob.johnson@example.com",
  "profession": "Financial Analyst"
},
{
  "name": "Emily Davis",
  "age": 20,
  "email": "emily.davis@example.com",
  "profession": "Graphic Designer"
},
{
  "name": "Michael Brown",
  "age": 30,
  "email": "michael.brown@example.com",
  "profession": "Human Resources Manager"
},
{
  "name": "Sophia Wilson",
  "age": 42,
  "email": "sophia.wilson@example.com",
  "profession": "Teacher"
},
{
  "name": "Daniel Miller",
  "age": 28,
  "email": "daniel.miller@example.com",
  "profession": "Sales Representative"
},
{
  "name": "Olivia White",
  "age": 31,
  "email": "olivia.white@example.com",
  "profession": "Healthcare Professional"
},
{
  "name": "Matthew Turner",
  "age": 35,
  "email": "matthew.turner@example.com",
  "profession": "Architect"
},
{
  "name": "Ava Martinez",
  "age": 25,
  "email": "ava.martinez@example.com",
  "profession": "Social Media Manager"
}]

fetchingCustomers():Observable<CustomerContactDetails[]>{
    return of(this.customerData)
}

customerDataById(id:number): Observable<CustomerContactDetails> {
  return of(this.customerData[id-1])
}

setCustomerDetails(customerId: number){
  this.viewCustomerDetails.next(customerId)
}

}
