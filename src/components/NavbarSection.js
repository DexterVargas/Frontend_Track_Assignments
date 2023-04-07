import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
// import NavLink from 'react-bootstrap/esm/NavLink';

function NavbarSection() {
	return (
	<>	
		<Navbar bg="light" variant="light">
			<Container>
					<Navbar.Brand>
						<Link to='/' className='nav-link' role='button'>
							<h1 className='handwriting'>&#123;Dexter&#125;</h1>
						</Link>
					</Navbar.Brand>
					<Nav className="ms-auto">
						<Link to='/' className='nav-link' role='button'>Home</Link>
						<Link to='/aboutMe' className='nav-link' role='button'>About Me</Link>
						<NavDropdown title="FE Assignments" id="basic-nav-dropdown">
							<NavDropdown.Item>Order Form</NavDropdown.Item>
							<NavDropdown.Item>Poll Survey</NavDropdown.Item>
							<NavDropdown.Item>Money Button Game</NavDropdown.Item>
							<NavDropdown.Item>My Pet</NavDropdown.Item>
							<NavDropdown.Item>Contact List | Local Storage</NavDropdown.Item>
							<NavDropdown.Item>Jokes | Reaction</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>
								<Link to='/assignments/imageapi' className='nav-link' role='button'>Image API</Link>
							</NavDropdown.Item>
						</NavDropdown>
						
					</Nav>
			</Container>
		</Navbar>
	</>
	);
}

export default NavbarSection;
