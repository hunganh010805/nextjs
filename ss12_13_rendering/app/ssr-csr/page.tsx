
import React, { useEffect, useState } from 'react';


interface Post {
  id: number;
  title: string;
  body: string;
}


async function getInitialPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  return res.json();
}

export default function PostsWithRefresh({ initialPosts }: { initialPosts: Post[] }) {

  const [posts, setPosts] = useState<Post[]>(initialPosts);


  const refreshPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setPosts(data);
  };

  return (
    <div>
      <button onClick={refreshPosts}>Refresh</button>
      <h1>Danh sách Bài viết với Refresh</h1>
      <ul>
        {posts.map((post) => (
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
  const initialPosts = await getInitialPosts();
  return {
    props: { initialPosts },
  };
}
