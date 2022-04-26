import { Container, Badge } from "react-bootstrap";

const MyBadge = (props) => {
	return (
		<Container className="text-center my-5">
			<h1>
				<Badge variant={props.color}>{props.title}</Badge>
			</h1>
		</Container>
	);
};

export default MyBadge;
