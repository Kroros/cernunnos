import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";


//EPOCH: 1970-1-1T12:00:00
function PostPage() {
  const postId = useParams().postId;
  const location = useLocation();
  const postLink = "http://localhost:5012/posts/";
  const postSpec = postLink.concat(String(postId))
  const commentLink = "http://localhost:5012/comments/";
  const commentSpec = commentLink.concat(String(postId));

  const [postTitle, setTitle] = useState<string>();
  const [postContent, setContent] = useState<string>();
  const [postTime, setTimeP] = useState<Date>(); 

  const [comments, setComments] = useState<string[]>([]);
  const [commentTimes, setTimeC] = useState<Date[]>([]);

  useEffect(() => {
    getPost();
    getComments();
  }, [location])

  function getPost() {
    axios
      .get(postSpec)
      .then((response) => {
        const responseData = response.data;

        setTitle(responseData.title);
        setContent(responseData.content);
        setTimeP(responseData.postTime);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getComments() {
    axios
      .get(commentSpec)
      .then((response) => {
        const responseData = response.data;
        const newComments: string[] = [];
        const newTimesC: Date[] = [];

        responseData.slice().reverse().forEach((comment: any) => {
          newComments.push(comment.commentText);
          newTimesC.push(comment.commentTime)
        })

        setComments(newComments);
        setTimeC(newTimesC);
      })
  }

  function postComment(content: string) {
    const dateTime = new Date();

    axios
      .post("http://localhost:5012/comments", {
        postId: postId,
        commentText: content,
        commentTime: dateTime
      })
      .then(() => {
        getComments();
      });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = (
      document.getElementById("commentInput") as HTMLTextAreaElement
    ).value;

    if (content.trim()) {
      postComment(content);
      (document.getElementById("commentInput") as HTMLTextAreaElement).value = "";
    }
  }

  return (
    <>
      <div id="commentBox">
        {/* {postTitle} + {postContent} + {postTime?.toString()} */}

        <div className="postContainer">
          <h4 style={{ margin: "0" }}>{postTitle}</h4>
          <p style={{ margin: "0", fontSize: "70%" }}>{postTime?.toString()}</p>
          <p>{postContent}</p>
        </div>

        <br />

        <textarea
          id="commentInput"
          className="commentInput"
          rows={4}
        ></textarea>

        <form className="commentSection" onSubmit={handleSubmit}>
          <button type="submit" className="postButton">
            send
          </button>
        </form>

        <br />

        {comments.map((comment, index) => (
          <div
            key={index}
            style={{
              display: "block",
              wordWrap: "break-word",
              width: "80%",
              border: "1px solid rgb(0, 200, 0)",
              marginBottom: "10px",
            }}
          >
            <p style={{ margin: "0", fontSize: "70%" }}>
              {Math.round(new Date(commentTimes[index]).getTime() / 1000) -
                Math.floor(new Date(commentTimes[index]).getTime() / 1000000000) *
                  1000000}
            </p>
            <p style={{ margin: "0" }}>{comment}</p>
            <p style={{ margin: "0", fontSize: "60%" }}>
              {commentTimes[index].toString()}
            </p>
          </div>
        ))}
      </div>
    </>
  );

}

export default PostPage;