import { Component } from "react";
import { Container,Badge } from "react-bootstrap";

class MyBadge extends Component {
  render() {
      return (
          <Container className="text-center my-5">
        <h1>
        <Badge variant={this.props.color}>{this.props.title}</Badge>
        </h1>
          </Container>
      )
  }
}

export default MyBadge