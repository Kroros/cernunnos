using forumBackend.Data;
using forumBackend.Dtos;
using forumBackend.Entities;
using forumBackend.Mapping;
using Microsoft.EntityFrameworkCore;

namespace forumBackend.Endpoints;

public static class CommentsEndpoints
{
    const string GetCommentContent = "GetComment";

    public static RouteGroupBuilder MapCommentsEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("comments")
                       .WithParameterValidation();

        //GET /comments
        group.MapGet("/", async (ForumContext dbContext) =>
            await dbContext.Comments
                           .Select(Comment => Comment.ToDtoC())
                           .AsNoTracking()
                           .ToListAsync());
            
        //GET /comments/postId
        group.MapGet("/{postId}", (int postId, ForumContext dbContext) =>
        {
            IEnumerable<Comment?> comments = dbContext.Comments.Where(comment => comment.PostId == postId);

            return comments is null ? Results.NotFound() : Results.Ok(comments);
        });

        //POST /comments
        group.MapPost("/", async (MakeCommentDto newComment, ForumContext dbContext) =>
        {
            Comment comment = newComment.ToEntityC();

            dbContext.Comments.Add(comment);
            await dbContext.SaveChangesAsync();

            return Results.Created();
        });


        //DELETE /comments/id
        group.MapDelete("/{id}", async (int id, ForumContext dbContext) =>
        {
            await dbContext.Comments.Where(comment => comment.Id == id)
                                    .ExecuteDeleteAsync();
        });

        return group;
    }
}
