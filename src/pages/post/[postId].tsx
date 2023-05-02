import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchPosts } from "../utils";

const inter = Inter({ subsets: ["latin"] });


export default function PostDetails() {

  const router = useRouter();

  interface PostType {

  }

  const [post, setPost] = useState<PostType>({});

  const { postId } = router.query;

  console.log('post', post)


  useEffect(() => {
    if (postId && postId !== undefined) {
      fetchPosts(postId, setPost);
    }
  },[postId])

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <p>{post?.title}</p>
      </main>
    </>
  );
}
