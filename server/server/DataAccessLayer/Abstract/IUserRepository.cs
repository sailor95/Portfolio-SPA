using server.Models.Entities;

namespace server.Data.Abstract
{
    public interface IUserRepository : IEntityBaseRepository<User>
    {
        bool IsUsernameUniq(string username);
        bool IsEmailUniq(string email);
    }
}
