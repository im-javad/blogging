import { useSelector } from "react-redux";
import { selectUserById } from "../../features/users/userSlice";
import { Circles } from "react-loader-spinner";

function PostAuthor({ authorId }) {
  const author = useSelector((state) => selectUserById(state, authorId));
  const UsersInLoading = useSelector((state) => state.users.inLoading);

  return (
    <>
      {UsersInLoading ? (
        <Circles
          height="30"
          width="30"
          color="orange"
          ariaLabel="circles-loading"
          visible={true}
        />
      ) : (
        <span>
          {author.firstName} {author.lastName}
        </span>
      )}
    </>
  );
}

export default PostAuthor;
