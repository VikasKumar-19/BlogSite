import { useRouter } from 'next/router';
import React from 'react'

const Blog = (props) => {
  const post = props.post;

  return (
    <div className='p-10'>
      <h1 className='text-center font-bold'>{post.title}</h1>
      <p className='py-3'>{post.content}</p>
    </div>
  )
}

export default Blog;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/getblogs`);
  const posts = await res.json()
  const paths = posts.map((post) => ({
    params: { blog: post.slug },
  }))
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/blogpost?blog=${params.blog}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}