import { useRouter } from 'next/router';
import blogData from '../blogData.json';

function BlogDetailsPage() {
  const router = useRouter();
  const { slug } = router.routeParams;
  const selectedPost = blogData.find(post => post.slug === slug);

  if (!selectedPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <h1>Blog Details</h1>
      <h2>Name: {selectedPost.title}</h2>
      <p>{selectedPost.content}</p>
    </div>
  );
}
export default BlogDetailsPage;
