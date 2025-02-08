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

async function fetchUsers(): Promise<Users[]> {
  const axisRes = await getData<Users[]>("cars");

  if (axisRes.statusText !== "OK") {
    throw new Error("Failed to fetch cars");
  }

  return axisRes.data;
}

export default async function UsersPage() {
  const users = await fetchUsers();

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
