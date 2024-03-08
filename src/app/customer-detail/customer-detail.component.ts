import { Component } from '@angular/core';
import { CustomerDataService } from '../services/customer-data.service';
import { CustomerContactDetails, GetCustomerById } from '../models/customer-list';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [JsonPipe],
  providers:[{
    provide: GetCustomerById,
    useClass: CustomerDataService
  }],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent {
  constructor(private customerDataService: CustomerDataService, private customerById:GetCustomerById){}

  customerDetails!:CustomerContactDetails
  ngOnInit(): void {
    this.customerDataService.viewCustomerDetails.subscribe((id:number)=>{
      if(id){
        this.customerById.customerDataById(id).subscribe((details:CustomerContactDetails)=>{
          if(details){
            this.customerDetails = details
          }
        })
      }
    })
  }

}
