

import React from 'react';

// Fetch post data by ID from the API
async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}


export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <div>
      <h1>Chi tiết Bài viết</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
