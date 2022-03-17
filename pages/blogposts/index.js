import React from 'react';
import Link from 'next/link';

const BlogPosts = () => {
  return (
    <div>
      Learning begins here. Search for any type of article here.
      <Link href={`/blogposts/${"howtolearnjs"}`} >
        <a>
          Learn js easy way...
        </a>
      </Link>
    </div>
  )
}

export default BlogPosts;