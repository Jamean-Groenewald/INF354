import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
  standalone: false
})

export class ProductListingComponent implements OnInit 
{
  products: Product[] = [];

  constructor(private productService: ProductService) {} //Injecting ProductService to fetch product data


  ngOnInit(): void 
  {
    this.loadProducts(); //load Products when component initialised 
  }

  loadProducts(): void 
  {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.sort((a, b) => b.id - a.id); //Sort products so the most recently added product appears first
      
      //this.products = data;
    });
  }

  deleteProduct(id: number): void 
  {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts(); //reload products after deleting
    });
  }
}
