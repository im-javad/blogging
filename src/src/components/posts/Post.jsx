import { useSelector } from "react-redux";
import { selectPostById } from "../../features/posts/postSlice";
import PostContent from "./PostContent";
import PostReactions from "./PostReactions";
import PostShowLink from "./PostShowLink";

function Post({ postId }) {
  const post = useSelector((state) => selectPostById(state, postId));
  const { reactions } = post;

  return (
    <article className="post-excerpt">
      <PostContent post={post} />
      <PostReactions reactions={reactions} />
      <PostShowLink postId={post.id} />
    </article>
  );
}

export default Post;
