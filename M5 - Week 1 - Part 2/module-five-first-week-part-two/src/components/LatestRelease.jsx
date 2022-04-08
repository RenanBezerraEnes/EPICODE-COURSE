import { Container, Row, Col, Card } from "react-bootstrap";
import { Component } from "react";
import HistoryBooks from '../data/history.json'

class LatestRelease extends Component {
  render() {
    return (
    <Container>
      <Row>
        
        {HistoryBooks.map((book) => (
            <Col xs={12} md={3} className=" pb-5">
            <Card key={book.asin} className="h-100">
            <Card.Img 
            className="d-block w-100"
            variant="top" 
            src={book.img} 
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{book.title}</Card.Title>
              <Card.Text className="font-weight-bold">
              Price : $  {book.price}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        ))
        }
        
      </Row>
    </Container>
    )
  }
}

export default LatestRelease