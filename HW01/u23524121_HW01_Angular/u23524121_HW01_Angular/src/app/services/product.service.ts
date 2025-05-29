import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  private apiUrl = 'https://localhost:7110/api/Product'; //Base URL for Product API

  constructor(private http: HttpClient) {} //Injects HttpClient to enable HTTP requests

  getProducts(): Observable<Product[]> //Fetches all products from API
  {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> //Fetches product by ID from API
  {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> //Adds new product to API
  {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> //updates product by ID
  {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> //Deletes product by ID
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
