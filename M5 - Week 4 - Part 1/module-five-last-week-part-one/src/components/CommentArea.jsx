import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentsList";
import { ListGroup } from "react-bootstrap";

const CommentArea = ({ selected, SetSelectedBook }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getCommentaries();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getCommentaries = async () => {
		const response = await fetch(
			"https://striveschool-api.herokuapp.com/api/comments/" + selected,
			{
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NTAwMzQ2MDcsImV4cCI6MTY1MTI0NDIwN30.q8-1MZ_TDzIXmHqj4QIMnHVpGC0L_YPc-Az587i8PVQ",
					"Content-type": "application/json",
				},
			}
		);
		const APIcomments = await response.json();
		setComments(APIcomments);
	};

	useEffect(() => {
		getCommentaries();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selected]);

	console.log(selected, "LOOK ME");
	return (
		<>
			<AddComment elementId={selected} SetSelectedBook={SetSelectedBook} />
			<h5 className="text-center mt-3">
				Click on the Image to show FeedBacks:
			</h5>
			<ListGroup>
				{comments &&
					comments.map((comment) => <CommentList comment={comment} />)}
			</ListGroup>
		</>
	);
};

export default CommentArea;
