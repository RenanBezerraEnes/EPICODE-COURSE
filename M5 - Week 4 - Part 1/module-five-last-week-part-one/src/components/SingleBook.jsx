import { Card } from "react-bootstrap";

const SingleBook = ({ book, selected, SetSelectedBook }) => {
	// state = {
	//     // selected: false,
	//     showCommentArea: false,

	// }
	// I assigned the state for false, so when it's toggle it will change for true

	const { asin, img, title, category, price } = book;

	return (
		<>
			<Card
				style={{ border: asin === selected ? "2px solid black" : "" }}
				key={asin}
				className="h-100"
			>
				{/* On Img because I want to do something I used setState and I can only access the object with this.state.selected
        What I am doing here is, if !this.state.selected is different than the default state(false), so then I applied the border otherwise,
        I don't need apply any border
        */}
				<Card.Img
					variant="top"
					src={img}
					onClick={() => {
						SetSelectedBook(asin);
						// ? this.props.selected + {showCommentArea: !this.state.showCommentArea} : ""
					}}
				/>
				<Card.Body className="font-weight-bold d-flex flex-column justify-content-between">
					<Card.Title>{title}</Card.Title>
					<Card.Text>{category}</Card.Text>
					<Card.Text>Price: ${price}</Card.Text>
					{/* {this.props.selected === this.props.book.asin ?  <CommentArea asin={asin}/> : null} */}
				</Card.Body>
			</Card>
		</>
	);
};

export default SingleBook;
