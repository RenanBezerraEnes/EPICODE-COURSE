import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Loading from "./Loading";

const AddComment = ({ elementId, SetSelectedBook }) => {
	const [comment, setComment] = useState("");

	const [rate, setRate] = useState("");

	const [isLoading, SetIsLoading] = useState(false);

	const onFeedBack = async (e) => {
		e.preventDefault();
		SetIsLoading(true);

		const response = await fetch(
			"https://striveschool-api.herokuapp.com/api/comments/",
			{
				method: "POST",
				body: JSON.stringify({ comment, rate, elementId }),
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NTAwMzQ2MDcsImV4cCI6MTY1MTI0NDIwN30.q8-1MZ_TDzIXmHqj4QIMnHVpGC0L_YPc-Az587i8PVQ",
					"Content-type": "application/json",
				},
			}
		);
		if (response.ok) {
			alert("Well Done");
			SetIsLoading(false);
		} else {
			SetIsLoading(false);
			alert("Something went wrong");
		}
	};

	useEffect(() => {
		onFeedBack();
	}, [SetSelectedBook]);

	return (
		<Form
			style={{ width: "300px" }}
			className="text-center ml-auto mr-auto"
			onSubmit={onFeedBack}
		>
			<Form.Group>
				<Form.Label>Rate</Form.Label>
				<Form.Control
					type="number"
					placeholder="rate the book"
					onChange={(e) => {
						setRate(e.target.value);
					}}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>FeedBack</Form.Label>
				<Form.Control
					type="text"
					placeholder="feedback"
					onChange={(e) => {
						setComment(e.target.value);
					}}
				/>
			</Form.Group>
			<Button type="submit">Submit</Button>
			<br />
			{isLoading && <Loading />}
		</Form>
	);
};

export default AddComment;
