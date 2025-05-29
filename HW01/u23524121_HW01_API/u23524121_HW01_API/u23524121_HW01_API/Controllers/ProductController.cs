using Microsoft.AspNetCore.Mvc;
using u23524121_HW01_API.Models;
using u23524121_HW01_API.Repositories;

namespace u23524121_HW01_API.Controllers
{
    [Route("api/[controller]")] //defining the route for controller
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public ProductController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts() //HTTP GET method to retrieve all products
        {
            return Ok(await _repo.GetAllProducts()); //Calling the repo method to get all products + returning Ok result with the products

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id) //HTTP GET method to retrieve product by ID
        {
            var product = await _repo.GetProductById(id); //calling repo method to get product by ID

            if (product == null)
            {
                return NotFound(); //return NotFound() result if product not found
            }

            return Ok(product); //return OK result with product if found
        }

        [HttpPost]
        public async Task<ActionResult<Product>> AddProduct(Product product) //HTTP POST method to add product
        {
            var newProduct = await _repo.AddProduct(product); //calling repo method to add product

            return CreatedAtAction(nameof(GetProduct), new { id = newProduct.Id }, newProduct); //returning CreatedAtAction result with new product
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Product product) //HTTP PUT method to update product
        {
            if(id != product.Id)
            {
                return BadRequest(); //return BadRequest() result if ID doesn't match
            }

            var updatedProduct = await _repo.UpdateProduct(product); //calling repo method to update product

            if (updatedProduct == null)
            {
                return NotFound();
            }

            return NoContent(); //return NoContent() result if product updated successfully
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id) //HTTP DELETE method to delete product by ID
        {
            return await _repo.DeleteProduct(id) ? NoContent() : NotFound(); //calling repo method to delete product + returning NoContent() if product deleted successfully
        }
    }
}
