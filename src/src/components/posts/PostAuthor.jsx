import { useSelector } from "react-redux";
import { selectUserById } from "../../features/users/userSlice";

function PostAuthor({ authorId }) {
  const author = useSelector((state) => selectUserById(state, authorId));

  return (
    <>
      {author ? (
        <span>
          {author.firstName} {author.lastName}
        </span>
      ) : (
        <strong>Know</strong>
      )}
    </>
  );
}

export default PostAuthor;
