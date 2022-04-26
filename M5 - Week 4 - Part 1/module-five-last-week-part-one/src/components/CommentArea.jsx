import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentsList";
import { ListGroup } from "react-bootstrap";

const CommentArea = ({ selected, SetSelectedBook }) => {
	// state = {
	//     comments: [],
	// }
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getCommentaries();
	}, []);

	const getCommentaries = async (e) => {
		// e.preventDefault()
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
				{/* {this.props.comments && this.props.comments.map(comment => {
                    console.log('oia eu aqui')
               return <CommentList comment={comment} />
                })} */}
				{/* It is really important to console.log everything to understand, and in the second case using map with curly braces, make possible to console.log
                otherwise it's not possible to console.log because it will return automatically
                */}
			</ListGroup>
		</>
	);
};

export default CommentArea;
