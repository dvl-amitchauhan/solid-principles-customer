export interface SortingData {
  sortData(data: any): void
}

export class SortingByName implements SortingData {
  sortData(data:any): void {
   return data.sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
  };
}

export class SortingByAge implements SortingData {
  sortData(data:any): void {
   return data.sort((a: any, b: any) => (a.age > b.age ? 1 : -1));
  };
}