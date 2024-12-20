import React from "react";

const PostsPage = () => {
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8"></ul>
    </main>
  );
};

export default PostsPage;
