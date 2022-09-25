import {  Component } from "react"
export default class CreateComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            content: ''
        }

    }

handleUserChange=e=>{
    
    const user = e.target.value;
    this.setState({user})
}

handleContentChange =e=>{
    const content = e.target.value;
    this.setState({content})
}

handleSubmit=e=>{
    e.preventDefault();
    this.props.handleCommentSubmit(this.state);
    this.setState({user:'',content:''})
}
    render() {
        return (

            <form className="createComment" onSubmit={this.handleSubmit}>
                <input type='text' placeholder="Your name.." value={ this.state.user} onChange={this.handleUserChange}/>
                <input type='text' placeholder="Your comment?" value={this.state.content} onChange={this.handleContentChange}/>
                <button type='Submit' className="postComment" >Post</button>
        </form>
        )
    }
}