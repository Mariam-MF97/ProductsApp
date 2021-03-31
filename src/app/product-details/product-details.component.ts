import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  listOfProductDetails: any;
  constructor(private productDetails : ProductsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.listOfProductDetails = params.id ;
      this.productDetails.getProductDetails(this.listOfProductDetails).subscribe(
        (data) => {
        this.listOfProductDetails = data
        },
        error => {
        console.log('error: ', error);
        },
        () => {
        console.log('complete ', "compelete");
        }
        );
      
    });
    
  }
 
  }


