import React from "react";

import styles from "./users.module.css";

// interface Users {
//   id: number;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//   };
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
//   email: string;
//   name: string;
//   phone: string;
//   username: string;
//   website: string;
// }

export default async function UsersPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Users</h1>
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
