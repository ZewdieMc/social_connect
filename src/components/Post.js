export default function Post(props){
    return (
        <div className="post">
            <div className="user">{props.user}</div>
            <div className="content">{props.content}</div>
        </div>
    )
}