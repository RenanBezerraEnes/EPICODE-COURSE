import { Component } from "react";
import { FormControl } from "react-bootstrap";
import CommentList from './CommentsList'

export default class CommentArea extends Component {
    state = {
        commentInput: "",
    }
    
    
    render () {
        return (
            <>
            {/* <FormControl value={this.state.commentInput} onChange={(e) => this.setState({ commentFilter: e.currentTarget.value.toLowerCase()})}>
            
            </FormControl> */}
            <h5>FeedBacks:</h5>
            <ul>
                {this.props.comments && this.props.comments.map(comment => <CommentList key={comment._id} comment={comment} />)}
            </ul>
            </>
        )
    }
    
}

