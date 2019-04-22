using server.Data.Abstract;
using server.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Data.Repositories
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        public UserRepository(PortfolioContext context) : base(context) { }

        public bool IsEmailUniq(string email)
        {
            var user = GetSingle(u => u.Email == email);
            return user == null;
        }

        public bool IsUsernameUniq(string username)
        {
            var user = GetSingle(u => u.Username == username);
            return user == null;
        }
    }
}
