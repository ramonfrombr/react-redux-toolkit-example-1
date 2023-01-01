import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { useParams } from "react-router-dom";
import PostsExcerpt from "./PostsExcerpt";

const SinglePostPage = () => {
  // retireve postId
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return <PostsExcerpt postId={postId} singlePost />;
};

export default SinglePostPage;
