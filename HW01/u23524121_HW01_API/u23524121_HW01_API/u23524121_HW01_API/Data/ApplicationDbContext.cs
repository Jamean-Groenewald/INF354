using Microsoft.EntityFrameworkCore;
using u23524121_HW01_API.Models;

namespace u23524121_HW01_API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
        }

        public DbSet<Product> Products { get; set; } //make table called products based on Product model

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed data
            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "Running Shoes", Price = 59.99, Description = "Comfortable running shoes for all levels." },
                new Product { Id = 2, Name = "Laptop", Price = 1000.98, Description = "Powerful gaming laptop with high-end specs." }
            );
        }
    }
}
