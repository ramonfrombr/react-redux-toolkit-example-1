import React from "react";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <div className="bg-gray-700 text-white p-5 min-h-screen">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
