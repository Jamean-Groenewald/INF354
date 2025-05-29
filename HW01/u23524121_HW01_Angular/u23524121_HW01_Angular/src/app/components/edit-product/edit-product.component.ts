import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  standalone: false
})

export class EditProductComponent implements OnInit 
{
  product: Product = { //object to hold product details being edited
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) //Injecting required services: ProductService for API calls, ActivatedRoute for route parameters, Router for navigation
  {}

  ngOnInit(): void 
  {
    const productId = Number(this.route.snapshot.paramMap.get('id')); //get product ID from route
    
    if(productId) //if product ID valid
    {
        this.productService.getProductById(productId).subscribe((data: Product) => { //fetch product details from service
          this.product = data; //populate product object with fetched data
        });
    }
  }

  onSubmit(): void 
  {
    this.productService.updateProduct(this.product.id, this.product).subscribe(() => { //call service to update product in db
      alert('Product updated successfully!');
      
      this.router.navigate(['/products']); // Navigate back to Product Listing page
    });
  }

  onCancel(): void 
  {
    this.router.navigate(['/products']); //navigate back to Product Listing page without saving changes
  }
}