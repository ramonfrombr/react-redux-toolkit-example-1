import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";
import { useAddNewPostMutation } from "./postsSlice";

const AddPostForm = () => {
  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = [title, userId, content].every(Boolean) && !isLoading;

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await addNewPost({ title, body: content, userId }).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate("/");
      } catch (error) {
        console.error("Failed to save post: ", error);
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2 className="mb-3 text-2xl text-white">Add a New Post</h2>

      <form className="flex flex-col bg-gray-300 p-5 text-black [&>input]:border [&>textarea]:border">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Post Author:</label>
        <select
          name="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
          id="postAuthor"
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          rows={4}
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>

        <button
          onClick={onSavePostClicked}
          disabled={!canSave}
          type="button"
          className="mt-3 w-fit bg-gray-900 p-1 text-white"
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
