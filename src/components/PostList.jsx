import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";


const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  /* useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    //cleanup api call
    return () => {
      controller.abort(); 
    };
  }, []); */ 

  return (
    <>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post, index) => <Post key={`${post.id}-${index}`} post={post} />)}


    </>
  );
};

export default PostList;
