import { Component } from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import Post from "./Post";

export default class CommentBox extends Component{
    constructor(props){
        super(props)
        this.state ={
            comments:this.props.comments
        }

    }
    handleCommentSubmit =(comment)=>{
    
        comment.id = Date.now()
        const comments = this.state.comments;
        const newComments = comments.concat([comment]);
        this.setState({comments:newComments})
    }

    render(){
        const comments = this.state.comments;
        return(
            <div className="commentBox">
                <Post 
                    id=''
                    content = {`To Make working with something easier, it needs deligence and working hard at first.
                    To Make working with something easier, it needs deligence and working hard at first.
                    To Make working with something easier, it needs deligence and working hard at first.`}
                    user = 'Mark'
                />
                {
                    comments.map(comment=>
                        <Comment
                            key = {comment.content}
                            user = {comment.user}
                            content = {comment.content}
                        />
                        )
                }
                <CreateComment 
                handleCommentSubmit = {this.handleCommentSubmit}
                />
            </div>
        )
    }
}