using Microsoft.EntityFrameworkCore;
using u23524121_HW01_API.Data;
using u23524121_HW01_API.Models;
using u23524121_HW01_API.Repositories;
    
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => //for STUPID CORS errors!!!!!!!!
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200") //angular app
        .AllowAnyMethod() //to allow all http methods(get, post, etc.)
        .AllowAnyHeader(); //allow any headers in request
    });
});

builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IProductRepository, ProductRepository>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAngularApp"); //CORSSSSSSSSSSSSSSSSSS

if(app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
