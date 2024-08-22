import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to Mumbai.",
    body: "Hi friends, I'm going to Mumbai for my vacation. Hope to enjoy a lot. Peace out :)",
    reaction: 3,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "Pass ho gaye bhai.",
    body: "College khatam, hard to believe. New Life start.",
    reaction: 5,
    userId: "user-11",
    tags: ["BTech", "graduating"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POSTLIST
  );

  const addPost = (post) => {
    dispatchPostList({ type: "ADD_POST", post });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
