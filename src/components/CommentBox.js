import { Component } from "react";
import PropTypes from 'prop-types';
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import Post from "./Post";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import CommentButton from "./CommentButton";
import ShareButton from "./ShareButton";
import LikeButton from "./LikeButton";
export default class CommentBox extends Component {
  static defaultProps = {
    comments: [
      { user: "Nathan", content: "That sounds cool" },
      { user: "zewdie", content: "That is good saying" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
    };
  }
  handleCommentSubmit = (comment) => {
    comment.id = Date.now();
    const comments = this.state.comments;
    const newComments = comments.concat([comment]);
    this.setState({ comments: newComments });
  };
  handleLikeClick = ()=>console.log('Liked')
  handleShareClick = ()=>console.log('Shared')
  handleCommentClick = ()=>console.log('Open CommentBox')

  render() {
    const comments = this.state.comments;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3"> </div>
          <div className="col-12 col-lg-6">
            <div className="commentBox">
              <Post />
              {comments.map((comment) => (
                <Comment
                  key={comment.content}
                  user={comment.user}
                  content={comment.content}
                />
              ))}
              <CreateComment handleCommentSubmit={this.handleCommentSubmit} />
              <hr></hr>
              <div className="row">
                <div className="col-3">
                <LikeButton onLikeClick = {this.handleLikeClick}/>
                </div>
                <div className="col-4">
                <CommentButton onCommentClick ={this.handleCommentClick}/>
                </div>
                <div className="col-4">
                <ShareButton onShareClick = {this.handleShareClick}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

CommentBox.propTypes = {
    comments:PropTypes.array.isRequired
}
