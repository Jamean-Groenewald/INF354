import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component'; 
import { AddProductComponent } from './components/add-product/add-product.component'; 
import { EditProductComponent } from './components/edit-product/edit-product.component'; 

const routes: Routes = [
    {path: "", redirectTo: "/products", pathMatch: "full"}, //Redirects root URL to "products" route
    {path: "products", component: ProductListingComponent}, //Route for displaying the product listing
    {path: "addProduct", component: AddProductComponent}, //Route for adding a new product.
    {path: "editProduct/:id", component: EditProductComponent}, // Route for editing a product, with dynamic "id" param
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
})
export class AppRoutingModule { } 