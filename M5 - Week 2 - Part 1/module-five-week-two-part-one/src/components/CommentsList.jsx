import { Component } from "react";
import { Button } from "react-bootstrap";
import Loading from "./Loading";

class CommentsList extends Component {
    // state = {
    //     isLoading: true,
    // }

    render () {
        console.log(this.props.comment, "HELLO WORLD")
        return (
        <>
        	{/* {
                this.state.isLoading && <Loading />
            } */}
            {/* <div className="d-flex justify-content-center my-5">
          <Loading />
        </div> */}
            <li>
                rate: {this.props.comment.rate} 
                <br /> 
                commentary: {this.props.comment.comment} <Button variant="outline-danger" onClick={this.deleteCommentary}>Remove</Button>
            </li>
            </>
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
        if(response.ok) {
            alert("The commentary has been removed")
            // this.setState({
            //     isLoading: false,
            // })
        } else {
            alert("Something is wrong")
        }
    }
}

export default CommentsList