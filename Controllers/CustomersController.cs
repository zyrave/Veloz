using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Veloz.Controllers.Resources;
using Veloz.Core;
using Veloz.Core.Models;

namespace Veloz.Controllers
{
    [Route("/api/[controller]")]
    public class CustomersController : Controller
    {
        private readonly ICustomerRepository customerRepository;
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public CustomersController(ICustomerRepository customerRepository, IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.customerRepository = customerRepository;
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

        // GET: api/customers
        [HttpGet]
        public async Task<QueryResultResource<CustomerResource>> GetCustomers(CustomerQueryResource filterResource)
        {
            var filter = mapper.Map<CustomerQueryResource, CustomerQuery>(filterResource);
            var queryResult = await customerRepository.GetCustomers(filter);

            return mapper.Map<QueryResult<Customer>, QueryResultResource<CustomerResource>>(queryResult);
        }

        // GET: api/customers/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomer(int id)
        {
            var customer = await customerRepository.GetCustomer(id);

            if (customer == null)
                return NotFound();

            var customerResource = mapper.Map<Customer, CustomerResource>(customer);

            return Ok(customerResource);
        }

        // POST: api/customers
        [HttpPost]
        public async Task<IActionResult> CreateCustomer([FromBody] SaveCustomerResource customerResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var customer = mapper.Map<SaveCustomerResource, Customer>(customerResource);
            customer.CreateDate = DateTime.Now;
            customer.LastUpdate = DateTime.Now;

            customerRepository.Add(customer);
            await unitOfWork.CompleteAsync();

            customer = await customerRepository.GetCustomer(customer.Id);
            var result = mapper.Map<Customer, CustomerResource>(customer);

            return Ok(result);
        }

        // PUT api/customers/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCustomer(int id, [FromBody] SaveCustomerResource customerResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var customer = await customerRepository.GetCustomer(id);

            if (customer == null)
                return NotFound();

            mapper.Map<SaveCustomerResource, Customer>(customerResource, customer);
            customer.LastUpdate = DateTime.Now;

            await unitOfWork.CompleteAsync();

            customer = await customerRepository.GetCustomer(customer.Id);
            var result = mapper.Map<Customer, CustomerResource>(customer);

            return Ok(result);
        }

        // DELETE api/customers/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var customer = await customerRepository.GetCustomer(id);

            if (customer == null)
                return NotFound();

            customerRepository.Remove(customer);
            await unitOfWork.CompleteAsync();

            return Ok(id);
        }


    }
}
