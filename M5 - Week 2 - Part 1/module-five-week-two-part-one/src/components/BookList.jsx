import { Component, useState } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";

class BookList extends Component {
  state = {
      book: fantasy,
      search:"",
  }

  

  render() {
    // const [load, setLoad] = useState(true) only for funcions

    return (
      <Container>
        <FormControl
          placeholder="Search"
          value={this.state.search}
          onChange={(e) => {
              this.setState({ search: e.currentTarget.value.toLowerCase() })
          }}
        />
          
          <Row>
          {this.state.book 
          .filter(book => book.title.toLowerCase().indexOf(this.state.search) !==-1 || book.category.toLowerCase().indexOf(this.state.search) !==-1)
          .map((book) => (
            <Col xs={12} md={3} className="my-3" key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))
          }
        </Row>
        

    
      </Container>
    );
  }
}

export default BookList;
