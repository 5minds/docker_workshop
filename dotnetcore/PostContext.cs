using Microsoft.EntityFrameworkCore;

namespace dotnetcore {
    public class PostContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=db/posts.db");
    }
}
