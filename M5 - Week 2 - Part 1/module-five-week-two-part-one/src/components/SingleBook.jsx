import { Component } from "react";
import React, {useState} from 'react';
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
      selected: false,
  }
// I assigned the state for false
  
  render() {
    const {asin, img, title, category, price} = this.props.book;

    return (
      <Card style={{border: this.state.selected? "2px solid black" : ""}} key={asin} className="h-100">
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
          <Button 
          variant="primary"
          >Select</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
