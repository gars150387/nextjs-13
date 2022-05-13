import { useDispatch } from "react-redux";
import { reactionAdd } from "../reducers/postsSlice";

const reactEmoji = {

            "thumbsUp": "️👍",
            "wow": "😲",
            "heart": "❤️",
            "rocket":"🚀",
            "coffee": "🍵"
}

export const ReactionsButton = ({ post }) => {
    const dispatch = useDispatch();

    const ReactionsButton = Object.entries(reactEmoji).map(([name, emoji]) => {
        return (
            <button
            key={ name }
            type="button"
            className="reactionButton"
            onClick={ () => dispatch(reactionAdd({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reaction[name]}
            </button>
        )
    })
  return (

    <div> {ReactionsButton} </div>
    
  )
}
