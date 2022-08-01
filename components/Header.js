import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <Link href="/">
      <a>
        <div className={styles.title}>cophi.blog</div>
      </a>
    </Link>
  );
}

export default Header;
