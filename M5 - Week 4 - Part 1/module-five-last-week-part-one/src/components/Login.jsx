import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./LoginStyle.css";

export default function Login() {
	return (
		<Container
			fluid
			className="d-flex justify-content-center align-items-center text-center mainLogin"
		>
			<Row className="mainLoginRow" xs={12}>
				<Col xs={12} className="mainLoginCol">
					<Form
						className="d-flex  flex-column justify-content-center"
						style={{ width: "100%", margin: "0 auto" }}
						onSubmit={() => {
							alert("You logged in");
						}}
					>
						<Form.Group className="mb-5">
							<Form.Label>
								<h5>Email</h5>
							</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter your email"
								required
							/>
							<Form.Text className="text-muted">
								We'll never share your Email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-5">
							<Form.Label>
								<h5>Password</h5>
							</Form.Label>
							<Form.Control type="password" placeholder="Password" required />
						</Form.Group>
						<Button variant="light" type="submit" size="lg" className="mt-5">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}
