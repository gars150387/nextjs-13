import Link from "next/link";
import LikeButton from "./LikeButton";
import Styles from "./ListOfPosts.module.css"

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next:{
      revalidate: 60
    }
  }).then((response) =>
    response.json()
  );
};

export async function ListOfPosts() {
  const posts = await fetchPosts();
  return posts.slice(0, 10).map((post) => {
    return (
      <Link href={`/posts/${post.id}`}>
        <article key={post.id}>
          <h2 className={Styles.title}>{post.title}</h2>
          <p className={Styles.paragraph}>{post.body}</p>
          <LikeButton />
        </article>{" "}
      </Link>
    );
  });
}
