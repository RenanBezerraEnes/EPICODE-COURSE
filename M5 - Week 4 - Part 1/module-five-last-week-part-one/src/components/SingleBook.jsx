import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleBook = ({ book, selected, SetSelectedBook }) => {
	const { asin, img, title, category, price } = book;

	return (
		<>
			<Card
				style={{ border: asin === selected ? "2px solid black" : "" }}
				key={asin}
				className="h-100"
			>
				<Card.Img
					variant="top"
					src={img}
					onClick={() => {
						SetSelectedBook(asin);
					}}
				/>
				<Card.Body className="font-weight-bold d-flex flex-column justify-content-between">
					<Card.Title>{title}</Card.Title>
					<Card.Text>{category}</Card.Text>
					<Card.Text>Price: ${price}</Card.Text>
					<Button
						variant="secondary"
						size="sm"
						as={Link}
						to={"/BookDetails/" + asin}
					>
						Details
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};

export default SingleBook;
