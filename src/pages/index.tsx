import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import ContactForm from "@/components/Contact/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next App</title>
        <meta name="description" content="My N A Desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p>My Test</p>
        <ContactForm />
        <Link href="/contact">Contact</Link>
      </main>
    </>
  );
}
