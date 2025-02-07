import React from "react";

import styles from "./users.module.css";
import { getData } from "@/API";

interface Users {
  id: number;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

async function fetchPosts(): Promise<Users[]> {
  // Запит до бекенду з опцією `cache: 'no-store'` для динамічного отримання даних
  const axisRes = await getData<Users[]>("cars");

  if (axisRes.statusText !== "OK") {
    throw new Error("Failed to fetch users");
  }

  return axisRes.data;
}

export default async function UsersPage() {
  const users = await fetchPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        {JSON.stringify(users)}
      </h1>
      {/* <ul className={styles.usersList}>
        {users.map(user =>
          <li key={user.id} className={styles.user}>
            <h2>
              {user.name}
            </h2>
            <p>
              {user.phone}
            </p>
          </li>
        )}
      </ul> */}
    </div>
  );
}
