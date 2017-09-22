using System.ComponentModel.DataAnnotations;

namespace Veloz.Controllers.Resources
{
    public class SaveCustomerResource
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string SocialId { get; set; }
        [Required]
        public bool IsCorporate { get; set; }
        [Required]
        public bool IsActive { get; set; }
    }
}
