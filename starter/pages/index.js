import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next with react query</title>
      </Head>

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
          </ul>
        </nav>
      </div>
    </div>
  );
}
