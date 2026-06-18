import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {
        name: "Samsumg",
        model: "Galaxy",
        price: 250000
      }, {
        name: "IPhone",
        model: "15 Pro Max",
        price: 650000
      }, {
        name: "Oppo",
        model: "Reno",
        price: 450000
      }
    ]
  }
}
