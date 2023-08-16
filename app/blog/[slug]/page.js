import React from 'react'
import styles from '../../page.module.css'
import blogData from '../../blogData.json'
function page({ params }) {

  const blogPost=blogData.find((blog)=>blog.id === parseInt(params.slug))
 
  return (
   
    <div className={styles.card}>
      <div className="card-content">
      <h2> {blogPost.title}t</h2>
      <p>{blogPost.content}</p>
      <p> {blogPost.date}</p>
      </div>
    </div>

  )
}

export default page
