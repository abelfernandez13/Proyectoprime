import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { ProductService } from '../service/product.service';
import { Product } from '../model/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  showDialog() {
  
}
   
    products: Product[];
    constructor(private productService: ProductService) {this.products=[]}
    ngOnInit(){
      this.llenarData();
    
    }


     llenarData(){

     this.productService.getProducts().subscribe((products) => {
    
      this.products = products
      console.log(this.products)
    
    
    });

      }
    }