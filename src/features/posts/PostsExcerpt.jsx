import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const POST_MAX_CHARACTERS = 75;

const PostsExcerpt = ({ postId, singlePost }) => {
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  return (
    <article className="mb-2 rounded bg-white p-2 text-black">
      <h3 className="mb-2 text-xl">{post.title}</h3>
      <p className="mb-2">
        {singlePost
          ? post.body
          : post.body.substring(0, POST_MAX_CHARACTERS) +
            (post.body.length > POST_MAX_CHARACTERS ? "..." : "")}
        {}
      </p>
      <p className="mb-2">
        {singlePost ? (
          <Link className="text-blue-400" to={`/post/edit/${post.id}`}>
            Edit
          </Link>
        ) : (
          <Link className="text-blue-400" to={`post/${post.id}`}>
            View
          </Link>
        )}
        &nbsp;
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
