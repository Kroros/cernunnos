using System.ComponentModel.DataAnnotations;

namespace forumBackend.Dtos;

public record class MakeCommentDto(
    [Required] int PostId,
    [Required] string CommentText,
    [Required] DateTime CommentTime
);
