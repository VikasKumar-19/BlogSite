import { useRouter } from 'next/router';
import React from 'react'

const Blog = () => {
  const router = useRouter();
  const {blog} = router.query;
  return (
    <div>
      <h1>{blog}</h1>
    </div>
  )
}

export default Blog;