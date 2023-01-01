import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectAllPosts, selectPostsByUser } from "../posts/postsSlice";
import { selectUserById } from "./usersSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2 className="my-2 text-2xl text-white">{user?.name}</h2>

      <ol className="list-inside list-decimal rounded bg-white p-3 [&>li]:mb-4 [&>li]:cursor-pointer [&>li]:text-blue-500 [&>li:hover]:underline">
        {postTitles}
      </ol>
    </section>
  );
};

export default UserPage;
