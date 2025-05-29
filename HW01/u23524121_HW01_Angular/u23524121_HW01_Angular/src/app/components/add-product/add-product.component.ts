import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: false
})

export class AddProductComponent 
{
  product: Product = { //object to hold product details
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService, private router: Router) //Injecting required services: ProductService for API calls, Router for navigations
  {}

  onSubmit(): void 
  {
    this.productService.addProduct(this.product).subscribe(() => { //call product service to add product to db
      alert('Product added successfully!');
      
      this.router.navigate(['/products']); // Navigate back to Product Listing page
    });
  }

  onCancel(): void 
  {
    this.router.navigate(['/products']); //navigate back to Product Listing page without saving changes

  }
}