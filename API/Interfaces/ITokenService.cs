using API.Entities;

namespace API.Interfaces
{
    /// <summary>
    /// Interfaz para uso de servicio de JWT 
    /// </summary>
    public interface ITokenService
    {
        /// <summary>
        /// Método para crear un Token dado un ususario. 
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        string CreateToken(AppUser user);
    }
}
