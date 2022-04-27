import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Loading from "./Loading";

const CommentsList = ({ comment }) => {
	const [isLoading, SetIsLoading] = useState(false);

	const deleteCommentary = async () => {
		SetIsLoading(true);
		const response = await fetch(
			"https://striveschool-api.herokuapp.com/api/comments/" + comment._id,
			{
				method: "DELETE",
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NTAwMzQ2MDcsImV4cCI6MTY1MTI0NDIwN30.q8-1MZ_TDzIXmHqj4QIMnHVpGC0L_YPc-Az587i8PVQ",
					"Content-type": "application/json",
				},
			}
		);
		if (response.ok) {
			alert("The commentary has been removed");
			SetIsLoading(false);
		} else {
			SetIsLoading(false);
			alert("Something is wrong");
		}
	};

	console.log(comment, "HELLO WORLD");
	return (
		<>
			{isLoading && <Loading />}

			<ListGroup.Item>
				<scan className="font-weight-bold">Rate: </scan> {comment.rate}
				<br />
				<scan className="font-weight-bold">Commentary: </scan> {comment.comment}{" "}
				<Button size="sm" variant="outline-danger" onClick={deleteCommentary}>
					Remove
				</Button>
			</ListGroup.Item>
		</>
	);
};

export default CommentsList;
