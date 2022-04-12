import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    const {asin, img, title, category, price} = this.props.book;
    return (
      <Card key={asin} className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body className="font-weight-bold">
          <Card.Title>{title}</Card.Title>
          <Card.Text >{category}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">Select</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
