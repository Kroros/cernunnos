using System;
using forumBackend.Dtos;
using forumBackend.Entities;

namespace forumBackend.Mapping;

public static class CommentMapping
{
    public static Comment ToEntityC(this MakeCommentDto comment)
    {
        return new Comment()
        {
            PostId = comment.PostId,
            CommentText = comment.CommentText,
            CommentTime = comment.CommentTime
        };
    }

    public static CommentDto ToDtoC(this Comment comment)
    {
        return new(
            comment.Id,
            comment.PostId,
            comment.CommentText,
            comment.CommentTime
        );
    }
}
