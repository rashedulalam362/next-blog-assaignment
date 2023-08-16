import React from 'react'
import blogData from '../../blogData.json'
function page({ params }) {

  const blogPost=blogData.find((blog)=>blog.id === parseInt(params.slug))
 
  return (
   
    <div> post blog: {params.slug}
      <h2> {blogPost.title}t</h2>
      <p>{blogPost.content}</p>
      <p> {blogPost.date}</p>
    </div>

  )
}

export default page
