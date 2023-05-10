import { BrowserRouter as Router } from "react-router-dom";
import { fetchPosts } from "./features/posts/postSlice";
import { fetchUsers } from "./features/users/userSlice";
import store from "./app/store";
import PostPage from "./components/posts/PostPage";
import Navbar from "./components/general/Navbar";
import "./index.css";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <PostPage />
        {/* <Users /> */}
        {/* <Notifications /> */}
      </Router>
    </>
  );
}

export default App;
