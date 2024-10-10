using forumBackend.Data;
using forumBackend.Dtos;
using forumBackend.Entities;
using forumBackend.Mapping;
using Microsoft.EntityFrameworkCore;


namespace forumBackend.Endpoints;

public static class PostsEndpoints
{
    const string GetPostEndpointContent = "GetPost";

    public static RouteGroupBuilder MapPostsEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("posts")
                       .WithParameterValidation();

        //GET /posts
        group.MapGet("/", async (ForumContext dbContext) =>
            await dbContext.Posts
                           .Select(post => post.ToDtoP())
                           .AsNoTracking()
                           .ToListAsync());

        //GET /posts/id
        group.MapGet("/{id}", async (int id, ForumContext dbContext) =>
        {
            Post? post = await dbContext.Posts.FindAsync(id);

            return post is null ? Results.NotFound() : Results.Ok(post);
        })
        .WithName(GetPostEndpointContent);

        //POST /posts
        group.MapPost("/", async (MakePostDto newPost, ForumContext dbContext) =>
        {
            Post post = newPost.ToEntityP();

            dbContext.Posts.Add(post);
            await dbContext.SaveChangesAsync();

            return Results.Created();
        });


        //DELETE /posts/id
        group.MapDelete("/{id}", async (int id, ForumContext dbContext) =>
        {
            await dbContext.Posts.Where(post => post.Id == id)
                                 .ExecuteDeleteAsync();
        });

        return group;
    }
}
