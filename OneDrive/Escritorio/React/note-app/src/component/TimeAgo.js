import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {

    let timeAgo = '';

    if (timestamp){
        const date = parseISO(timestamp)
        const timePerio = formatDistanceToNow( date )
        timeAgo = `${timePerio} ago`
    }

    return (
        <span title={timestamp}>
            <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo