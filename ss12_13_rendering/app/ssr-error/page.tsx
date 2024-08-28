
import React from 'react';

async function fetchData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/nonexistent-url');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {

    return { error: 'Xảy ra lỗi khi lấy dữ liệu' };
  }
}


export default function ErrorHandlingPage({posts} :{posts :any }) {
 
  if (posts.error) {
    return (
      <div>
        <h1>Xử lý Lỗi với SSR</h1>
        <p>{posts.error}</p>
        <p>posts.map is not a function</p>
      </div>
    );
  }

  
  return (
    <div>
      <h1>Xử lý Lỗi với SSR</h1>
      <ul>
        {posts.map((post:any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export async function getServerSideProps() {
  const posts = await fetchData();
  return { props: { posts } };
}
