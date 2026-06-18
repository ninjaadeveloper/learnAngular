import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicesApp';

  // products: any = '';

  // constructor(private NewProducts: ProductsService) {
  //   this.products = this.NewProducts.getProducts();
  // }

  products = [
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
