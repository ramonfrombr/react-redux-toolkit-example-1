import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { Link } from "react-router-dom";

const POST_MAX_CHARACTERS = 75;

const PostsExcerpt = ({ post, singlePost }) => {
  return (
    <article className="text-black bg-white rounded p-2 mb-2">
      <h3 className="text-xl mb-2">{post.title}</h3>
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
