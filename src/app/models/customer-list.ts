import { Observable } from "rxjs";

export interface CustomerPersonalDetails {
  name: string;
  age: number;

}

export interface CustomerContactDetails extends CustomerPersonalDetails {
  email:string;
  profession: string;
}

export abstract class GetCustomer {
  abstract fetchingCustomers():Observable<CustomerContactDetails[]>;
}

export abstract class GetCustomerById  extends GetCustomer{
   abstract customerDataById(id: number): Observable<CustomerContactDetails>;
}