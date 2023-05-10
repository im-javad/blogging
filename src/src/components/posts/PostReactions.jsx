const reactionIcons = {
  eyes: "👀",
  heart: "❤️",
  hooray: "🎉",
  rocket: "🚀",
  thumbsUp: "👍",
};

function PostReactions({ reactions }) {
  const preparedReactions = Object.keys(reactions).map((reaction) => (
    <button
      type="button"
      className="muted-button reaction-button"
      key={reaction}
    >
      {reactionIcons[reaction]} {reactions[reaction]}
    </button>
  ));
  return <div>{preparedReactions}</div>;
}

export default PostReactions;
