using System;

namespace forumBackend.Entities;

public class Post
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Content { get; set; }
    public DateTime PostTime { get; set; }

}
