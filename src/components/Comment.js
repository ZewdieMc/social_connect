export default function Comment(props){
    return(
        <div className="comment">
            <div className="user">{props.user}</div>
            <div className="content">{props.content}</div>
        </div>
    )
}