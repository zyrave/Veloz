using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Veloz.Core;
using Veloz.Core.Models;
using Veloz.Extensions;

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

        public async Task<QueryResult<Customer>> GetCustomers(CustomerQuery queryObj)
        {
            var result = new QueryResult<Customer>();
            var query = context.Customers.AsQueryable();

            query = query.ApplyFiltering(queryObj);

            var columnsMap = new Dictionary<string, Expression<Func<Customer, object>>>()
            {
                ["name"] = c => c.Name,
                ["address"] = c => c.Address,
                ["city"] = c => c.City,
                ["phone"] = c => c.Phone,
                ["email"] = c => c.Email,
                ["socialId"] = c => c.SocialId,
                ["isCorporate"] = c => c.IsCorporate,
                ["isActive"] = c => c.IsActive
            };
            query = query.ApplyOrdering(queryObj, columnsMap);

            result.TotalItems = await query.CountAsync();

            query = query.ApplyPaging(queryObj);

            result.Items = await query.ToListAsync();

            return result;
        }

        public async Task<Customer> GetCustomer(int id)
        {
            return await context.Customers.SingleOrDefaultAsync(c => c.Id == id);
        }

        public void Add(Customer customer)
        {
            context.Customers.Add(customer);
        }

        public void Remove(Customer customer)
        {
            context.Remove(customer);
        }
    }
}
