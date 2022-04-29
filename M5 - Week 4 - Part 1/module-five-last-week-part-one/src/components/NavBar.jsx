import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({ search, setSearch }) => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Brand href="#home">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qtHDj57wMNjSz6JSYNcWFq_JUtpVDb33mVX1q85l0o-ybXhQY2UVYgROfEK5RIZ_GtI&usqp=CAU"
					className="App-logo rounded-circle"
					style={{ height: 25 }}
					alt=""
				/>
			</Navbar.Brand>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						About
					</Nav.Link>
					<Nav.Link as={Link} to="/Browse">
						Browse
					</Nav.Link>
				</Nav>

				<Form inline>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value.toLowerCase());
						}}
					/>

					<Button as={Link} to="/Login">
						Login
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
