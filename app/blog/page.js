import React from 'react'
import blogData from '../blogData.json'
import Link from 'next/link';
function page() {
  // console.log(blogData);
  return (
    <div>
      <h1>blog-page </h1>
    

      {blogData.map((blog)=>(
       <div key={blog.id}>
        <Link href={`/blog/${blog.id}`}>
          
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
          
          </Link>
       </div>
      
        )
      
      )}
      
    </div>
  )
}

export default page