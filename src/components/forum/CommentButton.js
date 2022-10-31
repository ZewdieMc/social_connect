function CommentButton(props){
    return (
      <button className="btn btn-light-outline"onClick={props.onCommentClick}>
        <i className="fa fa-light fa-comment-o"></i> Comment
      </button>
    );
}

export default CommentButton;