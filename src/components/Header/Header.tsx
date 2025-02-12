"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import styles from "./header.module.css";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link
        className={clsx(
          "flex w-fit h-[38px] grow items-center justify-center gap-2 rounded-md bg-sky-500 p-3 text-sm text-white font-medium md:flex-none md:justify-start md:p-2 md:px-3",
          { "bg-sky-100 text-black": pathname === "/users" }
        )}
        href="/users"
      >
        Users
      </Link>
      <Link
        className={clsx(
          "flex w-fit h-[38px] grow items-center justify-center gap-2 rounded-md bg-sky-500 p-3 text-sm text-white font-medium md:flex-none md:justify-start md:p-2 md:px-3",
          { "bg-sky-100 text-black": pathname === "/posts" }
        )}
        href="/posts"
      >
        Posts
      </Link>
      <Link
        className={clsx(
          "flex w-fit h-[38px] grow items-center justify-center gap-2 rounded-md bg-sky-500 p-3 text-sm text-white font-medium md:flex-none md:justify-start md:p-2 md:px-3",
          { "bg-sky-100 text-black": pathname === "/cars" }
        )}
        href="/cars"
      >
        Cars
      </Link>
    </header>
  );
};

export default Header;
