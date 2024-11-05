using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    /// <summary>
    /// Hace referencia al contexto de los datos para su tratamiento en BD. 
    /// </summary>
    /// <param name="options"></param>
    public class DataContext(DbContextOptions options) : DbContext(options)
    {
        /// <summary>
        /// Columna de Usuarios en BD.
        /// </summary>
        public DbSet<AppUser> Users { get; set; }

    }
}
