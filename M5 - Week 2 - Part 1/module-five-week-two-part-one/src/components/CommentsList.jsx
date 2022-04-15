import { Component } from "react";


class CommentsList extends Component {

    render () {
        return (
            <li>
                {this.props.comment.rate}  {this.props.comment.comment}
            </li>
        )
    }
}

export default CommentsList