using System.Threading.Tasks;
using Veloz.Core.Models;

namespace Veloz.Core
{
    public interface ICustomerRepository
    {
        Task<QueryResult<Customer>> GetCustomers(CustomerQuery filter);
        Task<Customer> GetCustomer(int id);
        void Add(Customer customer);
        void Remove(Customer customer);
    }
}
