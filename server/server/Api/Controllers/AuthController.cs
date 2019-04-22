using Microsoft.AspNetCore.Mvc;
using server.Api.Services.Abstraction;
using server.Api.ViewModels;
using server.Data.Abstract;
using server.Models.Entities;
using System;

namespace server.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        IAuthService authService;
        IUserRepository userRepository;

        public AuthController(IAuthService a, IUserRepository u)
        {
            this.authService = a;
            this.userRepository = u;
        }

        [HttpPost("login")]
        public ActionResult<AuthData> Post([FromBody]LoginViewModel vm)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = userRepository.GetSingle(u => u.Email == vm.Email);

            if (user == null)
            {
                return BadRequest(new { email = "no user with this email" });
            }

            var passwordValid = authService.VerifyPassword(vm.Password, user.Password);
            if (!passwordValid)
            {
                return BadRequest(new { password = "invalid password" });
            }

            return authService.GetAuthData(user.Id);

        }

        [HttpPost("register")]
        public ActionResult<AuthData> Post([FromBody]RegisterViewModel vm)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var emailUniq = userRepository.IsEmailUniq(vm.Email);
            if (!emailUniq) return BadRequest(new { email = "user with this email already exists" });

            var usernameUniq = userRepository.IsUsernameUniq(vm.Username);
            if (!usernameUniq) return BadRequest(new { username = "user with this username already exists" });

            var id = Guid.NewGuid().ToString();
            var user = new User
            {
                Id = id,
                Username = vm.Username,
                Email = vm.Email,
                Password = authService.HashPassword(vm.Password)
            };
            userRepository.Add(user);
            userRepository.Commit();

            return authService.GetAuthData(id);
        }
    }
}
