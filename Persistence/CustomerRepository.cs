using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Veloz.Core;
using Veloz.Core.Models;

namespace Veloz.Persistence
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ApplicationDbContext context;

        public CustomerRepository(ApplicationDbContext context)
        {
            this.context = context;
            this.context.Database.AutoTransactionsEnabled = false;
        }

        public void Add(Customer customer)
        {
            context.Customers.Add(customer);
        }

        public void Remove(Customer customer)
        {
            context.Remove(customer);
        }

        public async Task<Customer> GetCustomer(int id)
        {
            return await context.Customers.SingleOrDefaultAsync(c => c.Id == id);
        }
    }
}
