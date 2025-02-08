import React from "react";
import styles from "./posts.module.css";
import { getData } from "@/API";

interface Post {
  id: number;
  name: string;
  body: number;
}

// Функція для отримання даних
async function fetchCPosts(): Promise<Post[]> {
  const axisRes = await getData<Post[]>("cars");

  if (axisRes.statusText !== "OK") {
    throw new Error("Failed to fetch cars");
  }

  return axisRes.data;
}
export default async function PostsPage() {
  const posts = await fetchCPosts();

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
