import PostAuthor from "./PostAuthor";
import PostDate from "./PostDate";

function PostContent({ post }) {
  return (
    <>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor authorId={post.author} />
        <PostDate date={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 50)}.....</p>
    </>
  );
}

export default PostContent;
