using System;

namespace Veloz.Controllers.Resources
{
    public class CustomerResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string SocialId { get; set; }
        public bool IsCorporate { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdate { get; set; }
    }
}
