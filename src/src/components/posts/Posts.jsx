import { useSelector } from "react-redux";
import { selectPostIds } from "../../features/posts/postSlice";
import Post from "./Post";

function Posts() {
  const postIds = useSelector(selectPostIds);
  const preparedPosts = postIds.map((id) => <Post postId={id} />);

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {preparedPosts}
    </section>
  );
}

export default Posts;
