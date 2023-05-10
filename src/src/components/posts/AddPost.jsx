import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/userSlice";
import {
  defaultNewPostData,
  storeAndSaveNewPost,
} from "../../features/posts/postSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddPost() {
  const dispatch = useDispatch();

  const [inLoading, setInLoading] = useState(0);

  const users = useSelector(selectAllUsers);
  const preparedUsers = users.map((user) => (
    <option value={user.id}>
      {user.firstName} {"=>"} {user.lastName}
    </option>
  ));

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [authorId, setAuthorId] = useState();

  const savePermission = () => {
    return [title, content, authorId].every(Boolean) && inLoading === 0;
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorIdChange = (e) => setAuthorId(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const savePost = async () => {
    setInLoading(1);
    const postData = {
      title,
      content,
      ...defaultNewPostData,
      author: authorId,
    };
    const serverResponse = await dispatch(storeAndSaveNewPost(postData));
    setInLoading(0);
    setTitle("");
    setContent("");
    setAuthorId("");
    return serverResponse;
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          value={title}
          onChange={handleTitleChange}
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          value={authorId}
          onChange={handleAuthorIdChange}
          id="postAuthor"
        >
          <option></option>
          {preparedUsers}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          value={content}
          onChange={handleContentChange}
          id="postContent"
          name="postContent"
        ></textarea>
        <button onClick={savePost} disabled={!savePermission()} type="button">
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPost;
