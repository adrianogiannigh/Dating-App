using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    /// <summary>
    /// Controlador de Usuarios 
    /// </summary>
    [Route("api/[controller]")] //api/users
    [ApiController]
    public class UsersController(DataContext context) : ControllerBase
    {

        #region Fields


        #endregion

        #region Endpoints 

        /// <summary>
        /// Método para obtener la lista de usuarios. 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            var users = await context.Users.ToListAsync();

            return Ok(users);
        }

        /// <summary>
        /// Método para obtener un usuario específico dado su ID. 
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id:int}")] // api/users/2
        public async Task<ActionResult<AppUser>> GetUserById(int id)
        {
            var user = await context.Users.FindAsync(id);

            if (user != null) 
                return Ok(user);
            else 
                return NotFound();
        }

        #endregion

    }
}
