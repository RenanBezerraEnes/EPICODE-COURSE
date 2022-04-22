import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
      // selected: false,
      showCommentArea: false,
      
  }
// I assigned the state for false, so when it's toggle it will change for true
    

  
  render() {
    const {asin, img, title, category, price} = this.props.book;

    return (
      <>
      <Card style={{border: this.props.book.asin === this.props.selected? "2px solid black" : ""}} 
      key={asin} className="h-100"
      >
        {/* On Img because I want to do something I used setState and I can only access the object with this.state.selected
        What I am doing here is, if !this.state.selected is different than the default state(false), so then I applied the border otherwise,
        I don't need apply any border
        */}
        <Card.Img 
        variant="top" 
        src={img}
        onClick={() => {
          this.props.selectedBook( this.props.book.asin )
          // ? this.props.selected + {showCommentArea: !this.state.showCommentArea} : ""
        }}
        />
        <Card.Body className="font-weight-bold d-flex flex-column justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Card.Text >{category}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          {this.props.selected === this.props.book.asin ?  <CommentArea asin={asin}/> : null}

        </Card.Body>
      </Card>     
      
      </>
    )
  }
}

export default SingleBook;
