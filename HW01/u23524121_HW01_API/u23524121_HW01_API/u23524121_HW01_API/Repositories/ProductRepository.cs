using Microsoft.EntityFrameworkCore;
using u23524121_HW01_API.Models;
using u23524121_HW01_API.Data;

namespace u23524121_HW01_API.Repositories
{
    public class ProductRepository : IProductRepository //implement interface
    {
        private readonly ApplicationDbContext _db;
        public ProductRepository(ApplicationDbContext db)
        {
            _db = db;   
        }

        public async Task<IEnumerable<Product>> GetAllProducts() //Retrieve all products from DB
        {
            return await _db.Products.ToListAsync(); 
        }

        public async Task<Product?> GetProductById(int id) //Retrieve product by ID
        {
            return await _db.Products.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Product> AddProduct(Product product) //Add product to DB
        {
            _db.Products.Add(product); //Add product to DbSet
            await _db.SaveChangesAsync(); //Save changes to DB
            return product;
        }

        public async Task<Product?> UpdateProduct(Product product) //Update specific product in DB
        {
            var existingProduct = await _db.Products.FindAsync(product.Id); //Find existing product to update in DB first

            if (existingProduct == null) 
            {
                return null;
            }

            existingProduct.Name = product.Name;
            existingProduct.Price = product.Price;
            existingProduct.Description = product.Description;

            await _db.SaveChangesAsync();

            return existingProduct; //return updated product
        }

        public async Task<bool> DeleteProduct(int id) //Delete product by ID from DB
        {
            var product = await _db.Products.FindAsync(id); //Find product in DB first

            if (product == null)
            {
                return false;
            }

            _db.Products.Remove(product); //Remove product from Db

            await _db.SaveChangesAsync();

            return true; //return true if product deleted successfully
        }
    }
}
