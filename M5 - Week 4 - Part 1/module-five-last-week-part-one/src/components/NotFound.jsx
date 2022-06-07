import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NotFoundStyle.css";

export default function NotFound() {
	return (
		<Container fluid className="NotFoundBackGround">
			<Row className="m-0">
				<Col
					xs={12}
					style={{ height: "100%" }}
					className="d-flex justify-content-center align-items-center p-0 img-notFound"
				>
					<img
						style={{ width: "100%", height: "100%" }}
						src="https://www.wigital.de/img/1104/1000/500/1/fehler-404-page-not-found.jpg"
						alt="Not Found"
					/>
				</Col>
			</Row>
		</Container>
	);
}
