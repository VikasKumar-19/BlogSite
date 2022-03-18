import React from "react";
import Link from "next/link";

const BlogPosts = (props) => {
  let allBlogs = props.data;

  return (
    <div className="max-w-[920px] mx-auto px-10 py-10">
      <h2 className="text-xl font-semibold">
        Learning begins here. Find latest articles below.
      </h2>
      <div className="flex flex-col gap-4 mt-4">
        {allBlogs.map((blog, idx) => {
          return (
            <div key={idx}>
              <Link href={`/blogposts/${blog.slug}`}>
                <a>
                  <h3 className="font-semibold">{blog.title}</h3>
                  <p>{blog.content.slice(0,140)}...</p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPosts;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/getblogs`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
