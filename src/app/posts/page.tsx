import React from "react";
import styles from "./posts.module.css";

// Компонент сторінки
export default async function PostsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Posts</h1>
    </div>
  );
}
