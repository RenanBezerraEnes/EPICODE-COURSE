import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import fantasy from "../data/fantasy.json";

export default function BookDetails() {
	const params = useParams();
	console.log("PARAMS", params);

	const [book, setBook] = useState(null);

	const [comments, setComments] = useState([]);

	const navigate = useNavigate();

	const getCommentaries = useCallback(async () => {
		const response = await fetch(
			"https://striveschool-api.herokuapp.com/api/comments/" + params.bookId,
			{
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NTEyNTAyNDUsImV4cCI6MTY1MjQ1OTg0NX0.Ut-v5b5wqmTvLhWgQsX5yuEFpy4Lg_H_54G1TswMzk4",
					"Content-type": "application/json",
				},
			}
		);
		const APIcomments = await response.json();
		setComments(APIcomments);
	}, [params.bookId]);

	useEffect(() => {
		let showBook = fantasy.find((book) => book.asin === params.bookId);
		console.log("BOOK FOUND", showBook);
		if (showBook) {
			setBook(showBook);
		} else {
			navigate("/Not-Found");
		}

		getCommentaries(setComments());
		// console.log("COMMENTS", comments);
	}, [getCommentaries, navigate, params.bookId]);

	return (
		<Container>
			<Row className="text-center justify-content-center">
				<Col className="my-5" md={6}>
					<h1 className="text-center mt-5">Book Details</h1>
					{book && (
						<div>
							<img src={book.img} alt="book" style={{ width: "200px" }} />
							<h3>{book.title}</h3>
							<h5>{book.category}</h5>
							<ListGroup>
								{comments &&
									comments.map((comment) => (
										<ListGroup.Item>
											<scan className="font-weight-bold">
												Rate: {comment.rate}
											</scan>

											<br />

											<scan className="font-weight-bold">
												Commentary: {comment.comment}
											</scan>
										</ListGroup.Item>
									))}
							</ListGroup>
						</div>
					)}
				</Col>
			</Row>
		</Container>
	);
}
