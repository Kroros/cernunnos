import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  pageId: number;
}

function CommentSection({ pageId }: Props) {
  const location = useLocation();

  // React State for Comments and Comment Times
  const [comments, setComments] = useState<string[]>([]);
  const [commentTimes, setCommentTimes] = useState<Date[]>([]);

  useEffect(() => {
    // Fetch comments whenever the location or pageId changes
    getComments(pageId);
  }, [location, pageId]);

  function getComments(page: number) {
    const hostLink = "http://localhost:5295/comments/";
    const pageSpecifier = hostLink.concat(String(page));

    axios
      .get(pageSpecifier)
      .then((response) => {
        // Extract data and update state
        const responseData = response.data;
        const newComments: string[] = [];
        const newCommentTimes: Date[] = [];

        responseData.slice().reverse().forEach((comment: any) => {
          newComments.push(comment.content);
          newCommentTimes.push(new Date(comment.postTime));
        });

        // Update state with the new comments
        setComments(newComments);
        setCommentTimes(newCommentTimes);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function postComment(content: string, page: number) {
    const dateTime = new Date();
    const dateOnly = dateTime.toISOString().split("T")[0];
    axios
      .post("http://localhost:5295/comments", {
        PageId: page,
        Content: content,
        PostTime: dateOnly,
      })
      .then(() => {
        // After posting, reload the comments
        getComments(pageId);
      });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = (
      document.getElementById("commentInput") as HTMLTextAreaElement
    ).value;
    if (content.trim()) {
      postComment(content, pageId);
      (document.getElementById("commentInput") as HTMLTextAreaElement).value =
        ""; // Clear input
    }
  }

  return (
    <>
      <hr className="separator"/>
      <label>communications</label>
      <br />

      <textarea
        id="commentInput"
        className="commentInput"
        rows={4}
        maxLength={500}
      ></textarea>

      <form className="commentSection" onSubmit={handleSubmit}>
        <button type="submit" className="postButton">
          send
        </button>
      </form>
      <br />

      <div id="commentBox">
        {comments.map((comment, index) => (
          <div
            key={index}
            style={{
              display: "block",
              wordWrap: "break-word",
              width: "80%",
              border: "1px solid rgb(0, 160, 0)",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "70%", margin: "0" }}>
              {commentTimes[index].toISOString().split("T")[0]}
            </p>
            <p style={{ margin: "0" }}>{comment}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentSection;