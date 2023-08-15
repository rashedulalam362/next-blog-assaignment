import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
// import blogData from './blogData.json'
export default function Home() {
  // console.log(blogData)
  return (
   <div >
    
  
     <h1 className={styles.heading} >Welcome To Homepage  </h1>
     <div className={styles.link}>
     <Link href="/blog" replace >
      Go to blog-page
    </Link>
     </div>
  
   </div>
    
  )
}
