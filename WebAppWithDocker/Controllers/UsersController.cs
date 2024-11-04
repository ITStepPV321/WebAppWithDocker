using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAppWithDocker.models;

namespace WebAppWithDocker.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = new[] {
                new User{
                    Id=1,
                    Name="Andriy",
                    Surname="Sokil"
                },
                new User{
                    Id=2,
                    Name="Igor",
                    Surname="Bandura"
                }
            };
            return Ok(users);
        }
    }
}
