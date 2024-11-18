namespace API.DTOs
{
    /// <summary>
    /// Data Transfer Object de un usuario
    /// </summary>
    public class UserDto
    {
        public required string Username { get; set; }

        public required string Token { get; set; }

    }
}
