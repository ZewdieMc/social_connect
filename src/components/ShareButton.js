function ShareButton(props){
    return (
      <button className="btn btn-light-outline" onClick={props.onShareClick}>
        <i className="fa fa-light fa-share"></i> Share
      </button>
    );
}
export default ShareButton;