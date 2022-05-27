import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/super-heroes">
              <a>aaaa</a>
            </Link>
          </li>
          <li>
            <Link href="/rq-super-heroes">
              <a>bbbb</a>
            </Link>
          </li>
          <li>
            <Link href="/paginated">
              <a>cccc</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/parallel">
              <a>cccc</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
