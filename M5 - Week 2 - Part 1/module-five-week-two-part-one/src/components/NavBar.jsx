import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Brand href="#home">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qtHDj57wMNjSz6JSYNcWFq_JUtpVDb33mVX1q85l0o-ybXhQY2UVYgROfEK5RIZ_GtI&usqp=CAU" 
      className="App-logo rounded-circle"
      style={{height: 25}}
      alt="" />
      </Navbar.Brand>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)


export default NavBar
