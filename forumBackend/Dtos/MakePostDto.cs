using System.ComponentModel.DataAnnotations;

namespace forumBackend.Dtos;

public record class MakePostDto(
    [Required][StringLength(200)] string Title,
    [Required] string Content,
    [Required] DateTime PostTime
);
