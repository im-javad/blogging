import { postReducer } from "../features/posts/postSlice";
import { usersReducer } from "../features/users/userSlice";

const appReducer = {
  posts: postReducer,
  users: usersReducer,
};

export default appReducer;
