using System;
using forumBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace forumBackend.Data;

public class ForumContext(DbContextOptions<ForumContext> options) : DbContext(options)
{
    public DbSet<Post> Posts => Set<Post>();
    public DbSet<Comment> Comments => Set<Comment>();
}
