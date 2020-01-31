using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace dotnetcore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {
        private readonly ILogger<PostController> _logger;
        private readonly PostContext context;

        public PostController(ILogger<PostController> logger, PostContext context)
        {
            _logger = logger;
            this.context = context;
            this.context.Database.Migrate();
        }

        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return context.Posts.ToList();
        }

        [HttpPost]
        public IActionResult Post(Post post) 
        {
            context.Add(post);
            context.SaveChanges();

            return Ok();
        }
    }
}
