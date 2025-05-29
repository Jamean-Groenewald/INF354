using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Collections.Generic; 
using System.Threading.Tasks;
using u23524121_HW01_API.Controllers;
using u23524121_HW01_API.Models;
using u23524121_HW01_API.Repositories;
using Xunit;

namespace u23524121_HW01_API.Tests
{
    public class ProductControllerTests
    {
        private readonly Mock<IProductRepository> _mockRepo;

        private readonly ProductController _controller;
        public ProductControllerTests()
        {

            _mockRepo = new Mock<IProductRepository>(); //mock object

            _controller = new ProductController(_mockRepo.Object); //initialise controller with mock object
        }

        [Fact]
        public async Task GetAllProducts_ReturnsOkResult_WithListOfProducts()
        {
            var products = new List<Product> //setting up repo to return list of products
            {
                new Product { Id = 1, Name = "Product1", Price = 10.0, Description = "Description1" },
                new Product { Id = 2, Name = "Product2", Price = 20.0, Description = "Description2" }
            };

            _mockRepo.Setup(repo => repo.GetAllProducts()).ReturnsAsync(products);

            //Act
            var result = await _controller.GetAllProducts(); //calling GetAllProducts from controller

            // Assert: Verifying the result
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var returnProducts = Assert.IsType<List<Product>>(okResult.Value); //Checking if list of products
            Assert.NotNull(returnProducts); //List not null
            Assert.Equal(2, returnProducts.Count); //Ensuring expected num of products returned
        }

        [Fact]
        public async Task GetProduct_ReturnsOkResult_WithProduct() //product by id
        {
            var product = new Product { Id = 1, Name = "Product1", Price = 10.0, Description = "Description1" };
            
            _mockRepo.Setup(repo => repo.GetProductById(1)).ReturnsAsync(product);

            // Act
            var result = await _controller.GetProduct(1); //calling GetProduct(id) from controller

            // Assert:
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var returnProduct = Assert.IsType<Product>(okResult.Value); // Checking if value is a product
            Assert.NotNull(returnProduct); // Ensuring List not null
            Assert.Equal(1, returnProduct.Id); // Ensuring returned product has expected ID
        }
    }
}
