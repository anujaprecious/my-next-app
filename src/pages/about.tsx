import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>My Next App</title>
        <meta name="description" content="My N A Desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p>My About page Test</p>
      </main>
    </>
  );
}
