using System;

namespace forumBackend.Entities;

public class Comment
{
    public int Id { get; set;}
    public int PostId { get; set;}
    public Post? Post { get; set;}
    public required string CommentText  { get; set; }
    public DateTime CommentTime { get; set; }
}
