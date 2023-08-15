import React from 'react'

function page({ postData }) {
  return (
    <div>
      {postData ? (
        <div>
          <h1>{postData.title}</h1>
          <p>{postData.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
       </div>
  )
}

export async function generateStaticParams() {
  const posts = await fetch('').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}


export default page

