function LikeButton(props){
    return (
      <button className="btn btn-light-outline" onClick={props.onLikeClick}>
        <i className="fa fa-light fa-thumbs-o-up"></i> Like
      </button>
    );
}

export default LikeButton;