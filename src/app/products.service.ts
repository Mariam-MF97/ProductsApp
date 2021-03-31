import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  count: number = 0 ;
  private myCounter=new BehaviorSubject(this.count);
  counter=this.myCounter.asObservable();
  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get("https://fakestoreapi.com/products")
  }

  getProductDetails(id) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
  changeCount()
  {
    this.count++;
    this.myCounter.next(this.count);
  }
}
