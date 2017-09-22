using Microsoft.EntityFrameworkCore;
using Veloz.Core.Models;

namespace Veloz.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }
}
