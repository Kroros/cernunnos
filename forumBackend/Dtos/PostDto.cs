namespace forumBackend.Dtos;

public record class PostDto(
    int Id,
    string Title,
    string Content,
    DateTime PostTime
);
