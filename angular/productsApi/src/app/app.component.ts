import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productsApi';

  productList: any;

  constructor(private products: ProductService) { }

  ngOnInit() {
    this.products.getProductList().subscribe((response: any) => {
      this.productList = response.products;
      console.log(response)
    })
  }
}
