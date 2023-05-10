import { useSelector } from "react-redux";
import AddPost from "./AddPost";
import { Circles } from "react-loader-spinner";
import Posts from "./Posts";

function PostPage() {
  const inLoading = useSelector((state) => state.posts.inLoading);
  const error = useSelector((state) => state.posts.error);

  return (
    <>
      {inLoading ? (
        <Circles
          height="80"
          width="80"
          color="orange"
          ariaLabel="circles-loading"
          visible={true}
        />
      ) : (
        <>
          {error ? (
            <strong style={{color: 'red'}}>erro in loading data</strong>
          ) : (
            <>
              <AddPost />
              <Posts />
            </>
          )}
        </>
      )}
    </>
  );
}

export default PostPage;
