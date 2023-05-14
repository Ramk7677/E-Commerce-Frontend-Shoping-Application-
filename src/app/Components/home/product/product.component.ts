import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Model/product';
import { EventEmitter } from '@angular/core';
import {Swal} from 'sweetalert2/dist/sweetalert2.js'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private route: Router;
  @Input() public product;

  @Output() productAddToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  addToCart() {
    
    this.productAddToCart.emit(this.product);
    alert('product added in the cart!!');
    //Swal.fire('Product added in  the cart');  
    //this.route.navigate(['/home/cart']);
  }

}
