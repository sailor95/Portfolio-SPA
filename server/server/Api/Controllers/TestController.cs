using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace server.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : Controller
    {
        [Authorize]
        [HttpGet, Route("authorize")]
        public IActionResult TestAuthPassed()
        {
            return new ContentResult() { Content = $@"For all client who is authorized." };
        }

        [HttpGet, Route("Anonymous")]
        public IActionResult TestAnonymous()
        {
            return new ContentResult() { Content = $@"All welcome!" };
        }

    }
}