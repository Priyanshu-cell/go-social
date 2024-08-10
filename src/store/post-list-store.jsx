import { Children } from "react";
import { createContext } from "react";

const POstList = createContext({});

const PostListProvider = (Children) =>{
  return <PostList.Provider value = {[]}>{Children}</PostList.Provider>
}

export default PostListProvider;