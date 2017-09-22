using System.Threading.Tasks;
using Veloz.Core.Models;

namespace Veloz.Core
{
    public interface ICustomerRepository
    {
        void Add(Customer customer);
        void Remove(Customer customer);
        Task<Customer> GetCustomer(int id);
    }
}
