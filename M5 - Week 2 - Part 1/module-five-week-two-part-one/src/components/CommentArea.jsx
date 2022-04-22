import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from './CommentsList'
import { ListGroup } from "react-bootstrap";


class CommentArea extends Component {
    state = {
        comments: [],
    }

    render () {
      console.log(this.props.selected, "LOOK ME")
        return (
            
            <>
            
            <AddComment elementId={this.props.selected}/>
            <h5 className="text-center mt-3">FeedBacks:</h5>
            <ListGroup>
                {this.state.comments &&  this.state.comments.map(comment => <CommentList  comment={comment} />)}
                {/* {this.props.comments && this.props.comments.map(comment => {
                    console.log('oia eu aqui')
               return <CommentList comment={comment} />
                })} */}
                {/* It is really important to console.log everything to understand, and in the second case using map with curly braces, make possible to console.log
                otherwise it's not possible to console.log because it will return automatically
                */}
            </ListGroup>
            </>
        )
    }


    componentDidMount =  () => {
      this.getCommentaries()
    }


    getCommentaries = async () => {
    
        const response = await fetch ("https://striveschool-api.herokuapp.com/api/comments/" + this.props.selected, {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NTAwMzQ2MDcsImV4cCI6MTY1MTI0NDIwN30.q8-1MZ_TDzIXmHqj4QIMnHVpGC0L_YPc-Az587i8PVQ",
          'Content-type': 'application/json',
        }
      })
      const APIcomments = await response.json();
      this.setState({
        comments: APIcomments,
      })
    }


    componentDidUpdate = (prevProps, prevState) => {
  
      if (prevProps.selected !== this.props.selected) {
        this.getCommentaries()
      }
    }
    
}

export default CommentArea

