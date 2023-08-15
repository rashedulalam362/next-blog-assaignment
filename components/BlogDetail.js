import React, { useState, useRouter } from "react";

const BlogDetails = ({ title }) => {
  const router = useRouter();
  const [detail, setDetail] = useState(null);

  async function fetchDetail() {
    const response = await fetch(`/api/blogs/${title}`);
    const data = await response.json();
    setDetail(data);
  }

  useEffect(() => {
    fetchDetail();
  }, [title]);

  if (!detail) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Blog Details</h2>
      <h1>{detail.title}</h1>
      <p>{detail.content}</p>
    </div>
  );
};

export default BlogDetails;