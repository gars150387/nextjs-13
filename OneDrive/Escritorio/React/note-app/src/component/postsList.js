import { useSelector } from "react-redux";
import { selectAllPost } from "../reducers/postsSlice";
 


const PostsList = () => {
    const post = useSelector(selectAllPost)

    const renderedPosts = post.map( post => (
        <article key={post.id}>
            <h3> {post.title} </h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )

}

export default PostsList