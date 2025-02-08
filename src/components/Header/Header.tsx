"use client";

import React from "react";
import { useRouter } from "next/navigation";

import styles from "./header.module.css";

const Header: React.FC = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <header className={styles.header}>
      <button className={styles.button} onClick={() => navigateTo("/users")}>
        Users
      </button>
      <button className={styles.button} onClick={() => navigateTo("/posts")}>
        Posts
      </button>
      <button className={styles.button} onClick={() => navigateTo("/cars")}>
        Cars
      </button>
    </header>
  );
};

export default Header;
