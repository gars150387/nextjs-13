import Link from "next/link";
import Styles from "./Comments.module.css"

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const post = await fetchComments(id);
  console.log("🚀 ~ file: page.js:16 ~ Comments ~ comment:", post);
  return (
    <ul className={Styles.body}>
      {post.map((comment) => {
        return (
          <article className={Styles.article}>
            <p>{comment.body}</p>
            <strong>{comment.email}</strong>
            <hr/>
          </article>
        );
      })}
    </ul>
  );
}
