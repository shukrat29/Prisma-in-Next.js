import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center ">
      <h1 className="text-3xl">Welcome to my blog</h1>

      <Link href="/posts">View posts</Link>
    </main>
  );
};

export default HomePage;
