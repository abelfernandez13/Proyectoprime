import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { Product, ProductDTO } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 constructor(private http:HttpClient) { }

 Api ='https://fakestoreapi.com/products'

  
  getProducts(): Observable<any> {
    return this.http
      .get(this.Api)
      
  }
}