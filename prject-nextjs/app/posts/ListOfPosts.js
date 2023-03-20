import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
};

export async function ListOfPosts() {
  const posts = await fetchPosts();
  return posts.slice(0, 10).map((post) => {
    return (
      <Link href={`/posts/${post.id}`}>
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton />
        </article>{" "}
      </Link>
    );
  });
}
