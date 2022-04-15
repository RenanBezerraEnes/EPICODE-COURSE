import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
      selected: false,
      showCommentArea: false,
      comments: [],
  }
// I assigned the state for false


  
  render() {
    const {asin, img, title, category, price} = this.props.book;

    return (
      <>
      <Card style={{border: this.state.selected? "2px solid black" : ""}} 
      key={asin} className="h-100"
      onClick={() => {
        this.setState({ showCommentArea: !this.state.showCommentArea })
      }}
      >
        {/* On Img because I want to do something I used setState and I can only access the object with this.state.selected
        What I am doing here is, if !this.state.selected is different than the default state(false), so then I applied the border otherwise,
        I don't need apply any border
        */}
        <Card.Img 
        variant="top" 
        src={img}
        onClick={() => {
          this.setState({ selected: !this.state.selected })
        }}
        />
        <Card.Body className="font-weight-bold d-flex flex-column justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Card.Text >{category}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          {this.state.showCommentArea ? <CommentArea comments={this.state.comments}/> : null}

        </Card.Body>
      </Card>
      
      
      </>
    )
  }

  componentDidMount = async () => {
    
      const response = await fetch ("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NTAwMzQ2MDcsImV4cCI6MTY1MTI0NDIwN30.q8-1MZ_TDzIXmHqj4QIMnHVpGC0L_YPc-Az587i8PVQ"
        }
    })
    const APIcomments = await response.json();
    this.setState({
      comments: APIcomments,
    })
    
  }
}

export default SingleBook;
