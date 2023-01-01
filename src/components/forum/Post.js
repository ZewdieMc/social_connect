import PropTypes from "prop-types";
function Post(props) {
  return (
    <div className="post">
      <div className="user">{props.user}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}
Post.propTypes = {
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
Post.defaultProps = {
  id: 1,
  user: `Mark`,
  content: `To Make working with something easier, it needs deligence and working hard at first.`,
};

export default Post;
