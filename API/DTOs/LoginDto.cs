namespace API.DTOs
{

    /// <summary>
    /// Data Transfer Object for Logging
    /// </summary>
    public class LoginDto
    {
        /// <summary>
        /// Nombre de Usuario.
        /// </summary>
        public required string UserName { get; set; }
        

        /// <summary>
        /// Passord de Usuario.
        /// </summary>
        public required string Password { get; set; }

    }
}
