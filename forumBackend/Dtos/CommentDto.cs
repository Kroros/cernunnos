namespace forumBackend.Dtos;

public record class CommentDto(
    int Id,
    int PostId,
    string CommentText,
    DateTime CommentTime
);
