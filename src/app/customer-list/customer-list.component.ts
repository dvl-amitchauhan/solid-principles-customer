import { Component } from '@angular/core';
import { CustomerDataService } from '../services/customer-data.service';
import { CustomerContactDetails, GetCustomer } from '../models/customer-list';
import { SortingService } from '../services/sorting.service';
import { SortingByAge, SortingByName } from '../models/sorting';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  providers:[{
    provide: GetCustomer,
    useClass: CustomerDataService
  }],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  SortByName = new SortingByName();
  SortByAge = new SortingByAge();
  customerList: CustomerContactDetails[] = []
  constructor(private customerDataService: CustomerDataService, private sortingService: SortingService){}
  ngOnInit(): void {
     console.log('Main accessible')
     this.getCustomerData();
  }


  getCustomerData(){
    this.customerDataService.fetchingCustomers().subscribe({
      next:(res:CustomerContactDetails[])=>{
        this.customerList = res;
      }
    })
  }

  viewDetails(id:number){
    this.customerDataService.setCustomerDetails(id+1)
  }

  sortBy(flag: string) {
    if(flag == 'name') {
      this.sortingService.setSortingStrategy(this.SortByName);
    } else if(flag == 'age') {
      this.sortingService.setSortingStrategy(this.SortByAge);
    }
    this.sortingService.sortingData(this.customerList)
  }

}
