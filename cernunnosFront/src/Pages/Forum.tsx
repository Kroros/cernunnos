import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



//milliseconds since epoch: dateTime.getTime()
function Forum() {
    const location = useLocation();
    const hostLink = "http://localhost:5012/posts";

    const [posts, setPosts] = useState<string[]>([]);
    const [postIds, setIds] = useState<number[]>([]);
    const [postTimes, setTimes] = useState<Date[]>([]);

    var snd = new Audio("snd/buttonClick.mp3");

    useEffect(() => {
        getPosts();
    }, [location])

    function getPosts() {
        axios
            .get(hostLink)
            .then((response) => {
                const responseData = response.data;

                const newPosts: string[] = [];
                const newIds: number[] = [];
                const newTimes: Date[] = [];

                responseData.slice().reverse().forEach((post: any) => {
                    newPosts.push(post.title);
                    newIds.push(post.id);
                    newTimes.push(post.postTime);
                });

                setPosts(newPosts);
                setIds(newIds);
                setTimes(newTimes);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function postPost(title: string, content: string ) {
        const dateTime = new Date();

        axios.post("http://localhost:5012/posts", {
            Title: title,
            Content: content,
            PostTime: dateTime
        })
        .then(() => {
            getPosts();
        });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const  title = (
            document.getElementById("titleInput") as HTMLTextAreaElement
        ).value;

        const content = (
          document.getElementById("postInput") as HTMLTextAreaElement
        ).value;

        if (title.trim()) {
            postPost(title, content);

            (document.getElementById("titleInput") as HTMLTextAreaElement).value = "";
            (document.getElementById("postInput") as HTMLTextAreaElement).value = "";

        }
    }


    return (
      <>
        <textarea
          id="titleInput"
          className="commentInput"
          rows={1}
          maxLength={200}
        ></textarea>

        <textarea id="postInput" className="commentInput" rows={4}></textarea>

        <form className="commentSection" onSubmit={handleSubmit}>
          <button type="submit" className="postButton">
            send
          </button>
        </form>

        <br />

        <div id="commentBox">
          {posts.map((post, index) => (
            <Link
              className="mainLink"
              to={{
                pathname: "/post/" + postIds[index],
              }}
            >
              <button
                className="postBox"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
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
                  <p style={{ margin: "0" }}>{post}</p>
                  <p style={{ margin: "0", fontSize: "70%" }}>
                    {postTimes[index].toString()}
                  </p>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </>
    );
}

export default Forum;