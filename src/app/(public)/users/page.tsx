import React from "react";

import styles from "./users.module.css";
import { getUsers } from "@/service/api.service";
import { Users } from "@/types/types";

const allUsers = async (): Promise<Users[]> => {
  return await getUsers();
};

export default async function UsersPage() {
  const users = await allUsers();

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Users</h1>
      <ul className={styles.usersList}>
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
      </ul>
    </div>
  );
}
