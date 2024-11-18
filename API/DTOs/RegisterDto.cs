using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    /// <summary>
    /// Data transfer Object for registering.
    /// </summary>
    public class RegisterDto
    {
        /// <summary>
        /// User Name DTO.
        /// </summary>
        [Required]        
        public required string UserName { get; set; }

        /// <summary>
        /// User Password Dto 
        /// </summary>
        [Required]
        public required string Password { get; set; }
    }
}
