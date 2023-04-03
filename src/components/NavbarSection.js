import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
						<Link to='/gallery' className='nav-link' role='button'>Gallery</Link>
					</Nav>
			</Container>
		</Navbar>
	</>
	);
}

export default NavbarSection;
