import Link from "next/link";
import Styles from "../ListOfPosts.module.css"

const fetchSinglePosts = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next:{
      revalidate: 60
    }
  }).then((response) =>
    response.json()
  );
};

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePosts(id)
  return (
    <article>
      <h1 className={Styles.title}>{post.title}</h1>
      <p className={Styles.paragraph}>{post.body}</p>
      <Link className={Styles.click} href={`/posts/${id}/comments`}>Comments</Link>
      {children}
    </article>
  )
}
