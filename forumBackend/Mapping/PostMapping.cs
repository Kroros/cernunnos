
using forumBackend.Dtos;
using forumBackend.Entities;
using Microsoft.AspNetCore.Components.Web;

namespace forumBackend.Mapping;

public static class PostMapping
{
    public static Post ToEntityP(this MakePostDto post)
    {
        return new Post()
        {
            Title = post.Title,
            Content = post.Content,
            PostTime = post.PostTime
        };
    }

    public static PostDto ToDtoP(this Post post)
    {
        return new(
            post.Id,
            post.Title,
            post.Content,
            post.PostTime
        );
    }
}
