import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/productlogo.svg';

function NavbarSection() {
	return (
	<>
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="http://localhost:3000/">
					<img
					alt=""
					src={logo}
					className="d-inline-block align-top logo"
					/>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="http://localhost:3000/">HOME</Nav.Link>
					<Nav.Link href="https://www.linkedin.com/in/dexter-vargas-801b96241/">PRODUCTS</Nav.Link>
					<Nav.Link href="http://localhost:3000/">🛒<Badge bg="danger">0</Badge></Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	</>
	);
}

export default NavbarSection;
