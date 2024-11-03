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
        /// Nombre del usuario. 
        /// </summary>
        public required string UserName { get; set; }

        #endregion

        #region Fields

        #endregion

        #region Methods

        #endregion

    }
}
