export const fetchPosts = async (postId: string | string[], setPost: any) => {
  const res = await fetch(`https://dummyjson.com/post/${postId}`);
  const post = await res.json();
  setPost(post);
};
