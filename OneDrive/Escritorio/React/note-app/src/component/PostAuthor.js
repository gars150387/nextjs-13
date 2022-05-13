import { useSelector } from "react-redux";
import { selectAllUsers } from "../user/usersSlice";

const PostAuthor = ({ userId }) => {

    const users = useSelector( selectAllUsers)

    const Author = users.find( user => user.id === userId)

    return (<span> by {Author ? Author.name : 'Unkown author'} </span>)
}

export default PostAuthor
