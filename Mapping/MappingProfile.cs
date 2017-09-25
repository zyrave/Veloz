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
            CreateMap(typeof(QueryResult<>), typeof(QueryResultResource<>));
            CreateMap<Customer, CustomerResource>();

            // API Resource to Domain
            CreateMap<CustomerQueryResource, CustomerQuery>();
            CreateMap<SaveCustomerResource, Customer>()
                .ForMember(c => c.Id, opt => opt.Ignore());
        }
    }
}
