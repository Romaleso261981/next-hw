import React from "react";

import styles from "./posts.module.css";
import { getData } from "@/API";
import { AxiosResponse } from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const axisRes: AxiosResponse = await getData<Post[]>("posts");

  if (axisRes.statusText !== "OK") {
    throw new Error("Failed to fetch users");
  }

  return axisRes.data;
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Posts</h1>
      <ul className={styles.postsList}>
        {posts.map(post =>
          <li key={post.id} className={styles.post}>
            <h2>
              {post.title}
            </h2>
            <p>
              {post.body}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
