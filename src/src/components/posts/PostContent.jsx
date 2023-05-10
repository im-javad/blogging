import PostAuthor from "./PostAuthor";

function PostContent({ post }) {
  return (
    <>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor authorId={post.author} />
        <span title={post.date}>
          &nbsp; <i>{post.date}</i>
        </span>
      </div>
      <p className="post-content">{post.content}</p>
    </>
  );
}

export default PostContent;
