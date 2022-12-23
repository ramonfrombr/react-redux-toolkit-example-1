import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <article className="text-black bg-white rounded p-2 mb-2">
      <h3 className="text-xl mb-2">{post.title}</h3>
      <p className="mb-2">
        {post.body.substring(0, 100)}
        {post.body.length > 100 && "..."}
      </p>
      <p className="mb-2">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
