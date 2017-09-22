using AutoMapper;
using Veloz.Controllers.Resources;
using Veloz.Core.Models;

namespace Veloz.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Domain to API Resource
            CreateMap<Customer, CustomerResource>();

            // API Resource to Domain
            CreateMap<SaveCustomerResource, Customer>();
        }
    }
}
