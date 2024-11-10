using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    /// <summary>
    /// Controla las  cuentas de los usuarios.
    /// </summary>
    public class AccountController(DataContext context) : BaseApiController
    {
        /// <summary>
        /// Endpoint para registar un usuario.
        /// </summary>
        /// <param name="registerDto"></param>
        /// <returns></returns>
        [HttpPost("register")] // account/register
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
        {
            if (await UserExist(registerDto.UserName)) return BadRequest("User Name is Taken");

            using var hmac = new HMACSHA512(); // is going not going to instanciate.

            var user = new AppUser()
            {
                UserName = registerDto.UserName.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };
            context.Users.Add(user);
            await context.SaveChangesAsync();

            return user; 
        }
        /// <summary>
        /// Endpoint para logear un usuario. 
        /// </summary>
        /// <returns></returns>
        [HttpPost("login")]
        public async Task<ActionResult<AppUser>> Login(LoginDto loginDto)
        {
            var user = await context.Users.FirstOrDefaultAsync(p =>
            p.UserName == loginDto.UserName.ToLower()
            );

            if (user == null) return Unauthorized("Invalid User Name");

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid Passoword");
            }
            return user;
        }

        private async Task<bool> UserExist(string username)
        {
            return await context.Users.AnyAsync(p => p.UserName.ToLower() == username.ToLower());
        }
    }
}
