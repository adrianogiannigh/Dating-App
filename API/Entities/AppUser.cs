namespace API.Entities
{
    /// <summary>
    /// Define un usuario.
    /// </summary>
    public class AppUser
    {
        #region Properties 

        /// <summary>
        /// Identidad del usuario. 
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Nombre del usuario requerido.
        /// </summary>
        public required string UserName { get; set; }

        /// <summary>
        /// Hash de Password requerida.
        /// </summary>
        public required byte[] PasswordHash { get; set; }

        /// <summary>
        /// Salt Password requerida. 
        /// </summary>
        public required byte[] PasswordSalt { get; set; }


        #endregion

        #region Fields

        #endregion

        #region Methods

        #endregion

    }
}
