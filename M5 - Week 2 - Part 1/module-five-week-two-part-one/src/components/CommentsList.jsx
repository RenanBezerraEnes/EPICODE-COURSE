import { Component } from "react";

class CommentsList extends Component {

    render () {
        console.log(this.props.comment, "HELLO WORLD")
        return (
            <li>
                rate: {this.props.comment.rate} 
                <br /> 
                commentary: {this.props.comment.comment} <button onClick={this.deleteCommentary}>Remove</button>
            </li>
        )
    }

    deleteCommentary = async () => {
        const response = await fetch ("https://striveschool-api.herokuapp.com/api/comments/" + this.props.comment._id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NTAwMzQ2MDcsImV4cCI6MTY1MTI0NDIwN30.q8-1MZ_TDzIXmHqj4QIMnHVpGC0L_YPc-Az587i8PVQ",
                'Content-type': 'application/json',
              },
        })
    }
}

export default CommentsList