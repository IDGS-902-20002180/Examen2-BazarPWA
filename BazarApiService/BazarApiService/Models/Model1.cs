using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace BazarApiService.Models
{
    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=ConexionBD")
        {
        }

        public virtual DbSet<ProductImages> ProductImages { get; set; }
        public virtual DbSet<Products> Products { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Products>()
                .Property(e => e.Price)
                .HasPrecision(10, 2);

            modelBuilder.Entity<Products>()
                .Property(e => e.DiscountPercentage)
                .HasPrecision(5, 2);

            modelBuilder.Entity<Products>()
                .Property(e => e.Rating)
                .HasPrecision(3, 2);
        }
    }
}
