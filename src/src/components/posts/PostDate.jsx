import Moment from "react-moment";

function PostDate({ date }) {
  return (
    <div>
      <span title={date}>
        &nbsp; <Moment fromNow>{date}</Moment>
      </span>
    </div>
  );
}

export default PostDate;
