import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <Link href="/">
      <a>
        <div className={styles.title}>code/phi.</div>
      </a>
    </Link>
  );
}

export default Header;
