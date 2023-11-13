using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BazarApiService.Models;

namespace BazarApiService.Controllers
{
    public class ProductsController : ApiController
    {
        private Model1 db = new Model1();

        // GET: api/Products
        // GET: api/Products
        public IQueryable<Products> GetProducts(string searchTerm = null)
        {
            IQueryable<Products> query = db.Products;

            if (!string.IsNullOrEmpty(searchTerm))
            {
                searchTerm = searchTerm.ToLower();
                query = query.Where(p =>
                    p.Title.ToLower().Contains(searchTerm) ||
                    p.Description.ToLower().Contains(searchTerm) ||
                    p.Brand.ToLower().Contains(searchTerm) ||
                    p.Category.ToLower().Contains(searchTerm)
                );
            }

            return query;
        }



        // GET: api/Products/5
        [ResponseType(typeof(Products))]
        public IHttpActionResult GetProducts(int id)
        {
            Products product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            // Carga las imágenes relacionadas con el producto
            db.Entry(product).Collection(p => p.ProductImages).Load();

            return Ok(product);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductsExists(int id)
        {
            return db.Products.Count(e => e.ProductID == id) > 0;
        }
    }
}
