import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { Product } from "../model/product";
import { Product1 } from '../model/product1';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],   
  
})
export class AddProductComponent {

productArray: Product1[] = [{
  "id": 0,
  "code": "455",
  "title": "abel",
  "description": "hjhjhjh",
  "image": "http://placehold.it/",
  "price": 5666,
  "category": "tecnologia",
  "quantity": 67676,
  "inventoryStatus": "available",
  "rating": 3



}];

selectedProduct: Product1 = new Product1();


  value1: number = 0

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    ingredient!: string;

    add(){

this.selectedProduct.id = this.productArray.length + 1;
this.productArray.push(this.selectedProduct);

console.log(this.selectedProduct)


    }


}
