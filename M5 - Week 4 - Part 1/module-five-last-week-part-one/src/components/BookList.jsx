import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import CommentArea from "./CommentArea";

const BookList = ({ search }) => {
	// Before I had a class Component and now I have a function Component,
	// So to use the State I need have a const, with the state and the setState and this will be = useState

	const [book, setBook] = useState(fantasy);

	const [selected, SetSelectedBook] = useState(null);

	return (
		<Container className="d-flex">
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
