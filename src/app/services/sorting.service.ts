import { Injectable } from '@angular/core';
import { SortingData } from '../models/sorting';

@Injectable({
  providedIn: 'root'
})
export class SortingService {
  private sortingStrategy!: SortingData;

  setSortingStrategy(strategy: SortingData): void {
    this.sortingStrategy = strategy;
  }

  sortingData(data:any): void{
    return this.sortingStrategy.sortData(data);
  }

}
