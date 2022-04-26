import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import CommentArea from "./CommentArea";

const BookList = ({ search }) => {
	// state = {
	//     book: fantasy,
	//     selected: null,
	// }

	// selectedBook = (newState) => {
	//   this.setState({
	//     selected: newState,
	//   })
	// }
	// const [load, setLoad] = useState(true) only for funcions

	const [book, setBook] = useState(fantasy);

	const [selected, SetSelectedBook] = useState(null);

	return (
		<Container className="d-flex">
			{/* I removed the FormControl from this component and I applied it to the NavBar Component, but for accesing the filter and map
        I elevate the state for the nearest parent of both Components and with props and one function I can assign this props to the filter and map
        and also to the values on the new FormControl on 
        */}

			{/* <FormControl
          placeholder="Search"
          value={this.props.search}
          onChange={(e) => {
            this.props.searchNavBarInput({ search: e.currentTarget.value.toLowerCase() })
        // }}
          // onChange={(e) => {
          //     this.setState({ search: e.currentTarget.value.toLowerCase() })
          // }}
        /> */}
			<Row>
				{book
					.filter(
						(book) =>
							book.title.toLowerCase().indexOf(search) !== -1 ||
							book.category.toLowerCase().indexOf(search) !== -1
					)
					.map((book) => (
						<Col xs={12} md={3} className="my-3" key={book.asin}>
							<SingleBook
								book={book}
								selected={selected}
								SetSelectedBook={SetSelectedBook}
							/>
						</Col>
					))}
			</Row>

			<Row className="ml-5 mt-3">
				<Col xs={12}>
					<CommentArea selected={selected} SetSelectedBook={SetSelectedBook} />
				</Col>
			</Row>
		</Container>
	);
};

export default BookList;
