import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectAllPost } from "../reducers/postsSlice";
import PostAuthor from "./PostAuthor";
// import { ReactionsButton } from "./ReactionsButton";
import TimeAgo from "./TimeAgo";


const PostsList = () => {

    const id = nanoid()

    const post = useSelector(selectAllPost)

    const orderPosts = post.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderPosts.map(post => (
        <div id="post" className="m-5">
            <article key={post.id}>
                <h3> {post.title} </h3>
                <p>{post.content.substring(0, 100)}</p>
                <p className="postCredit">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                {/* <ReactionsButton post={post} /> */}
            </article>
            <br />

        </div>

    ))

    return (
        <div className="postList">
            <section key={ id }>
                <h2>Posts</h2>
                {renderedPosts}
            </section>

        </div>
    )

}

export default PostsList