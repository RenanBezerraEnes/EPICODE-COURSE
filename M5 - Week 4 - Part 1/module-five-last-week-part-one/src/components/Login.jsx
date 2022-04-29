import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Login() {
	return (
		<Container>
			<Row>
				<Col className="d-flex justify-content-center text-center mt-5" xs={12}>
					<Form
						style={{ width: "40%", margin: "0 auto" }}
						onSubmit={() => {
							alert("You logged in");
						}}
					>
						<Form.Group className="mb-3">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter your email"
								required
							/>
							<Form.Text className="text-muted">
								We'll never share your Email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" required />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}
