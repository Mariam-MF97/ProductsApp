import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listOfProducts: any;
  myCount: any;
  constructor(private myProducts:ProductsService) { }

  ngOnInit(): void {
    this.myProducts.getProducts().subscribe(
      (data) => {
      this.listOfProducts = data
      },
      error => {
      console.log('error: ', error);
      },
      () => {
      console.log('complete ', "compelete");
      }
      );
  }
  addToCart() {
    this.myCount++;
    this.myProducts.changeCount();
  }
 
  }

  

