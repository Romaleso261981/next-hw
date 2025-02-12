import React from "react";

import styles from "./posts.module.css";
import { getPosts } from "@/service/api.service";
import { Posts } from "@/types/types";

const allPosts = async (): Promise<Posts[]> => {
  return await getPosts();
};

export default async function PostsPage() {
  const users = await allPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Posts</h1>
      <ul className={styles.postsList}>
        {users.map(user =>
          <li key={user.id} className={styles.post}>
            <h2>
              {user.title}
            </h2>
            <p>
              {user.body}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
