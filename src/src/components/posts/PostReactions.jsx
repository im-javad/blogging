function PostReactions({ reactions }) {
  return (
    <div>
      <button type="button" className="muted-button reaction-button">
        👍 {reactions.thumbsUp}
      </button>
      <button type="button" className="muted-button reaction-button">
        🎉 {reactions.hooray}
      </button>
      <button type="button" className="muted-button reaction-button">
        ❤️ {reactions.heart}
      </button>
      <button type="button" className="muted-button reaction-button">
        🚀 {reactions.rocket}
      </button>
      <button type="button" className="muted-button reaction-button">
        👀 {reactions.eyes}
      </button>
    </div>
  );
}

export default PostReactions;
