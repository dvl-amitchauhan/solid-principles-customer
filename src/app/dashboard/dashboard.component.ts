
import { Component } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { CustomerDataService } from '../services/customer-data.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CustomerListComponent, CustomerDetailComponent, NgIf, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{
  constructor(public customerDataService: CustomerDataService){}
}
