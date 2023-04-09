import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchBar from './SearchBar';
import { Badge } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './YTstyle.css';

const NavbarComp = () => {
	return (
	<>	
		<Navbar bg="light" variant="light" className='header'>
			<Navbar.Brand className='logo left'>
			<MenuIcon className='material-icons menu'/>
				<Link to='/' className='nav-link' role='button'>
					<YouTubeIcon style={{color:'red', fontSize:'1.6em'}} /><span id='youtube'>YouTube</span>
				</Link>
			</Navbar.Brand>
			<SearchBar />
			<div className="icons right">
				<VideoCallIcon className='material-icons'/>
				<NotificationsNoneIcon className='material-icons'/><Badge bg="danger" className='notif-badge'>9+</Badge>
				<AccountCircleIcon className='material-icons'/>
			</div>           
		</Navbar>
	</>
	);
}

export default NavbarComp;
