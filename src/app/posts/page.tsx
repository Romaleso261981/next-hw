import React from "react";
import styles from "./posts.module.css";

interface Post {
  id: number;
  name: string;
  body: number;
}

// Функція для отримання даних
async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("/api/cars");

  return res.json();
}

// Компонент сторінки
export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Posts</h1>
      <ul className={styles.postsList}>
        {posts.map(post =>
          <li key={post.id} className={styles.post}>
            <h2>
              {post.name}
            </h2>
            <p>
              Price: {post.body}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
