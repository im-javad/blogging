import { Link } from "react-router-dom";

function PostShow({ postId }) {
  return (
    <Link
      className="button muted-button"
      to={`/posts/${postId}`}
      dideo-checked="true"
    >
      View Post
    </Link>
  );
}

export default PostShow;
