using u23524121_HW01_API.Models;

namespace u23524121_HW01_API.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProducts();

        Task<Product?> GetProductById(int id);

        Task<Product> AddProduct(Product product);

        Task<Product?> UpdateProduct(Product product);

        Task<bool> DeleteProduct(int id);
    }
}
