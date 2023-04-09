import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../YTstyle.css";
import { Nav } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import HistoryIcon from '@mui/icons-material/History';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

function Sidebar() {	
	return (
		<div className="side-bar">
			   <Nav>
				<Nav.Link className="nav-link active">
					<HomeIcon className="material-icons" />
					<span>Home</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<SlowMotionVideoIcon className="material-icons" />
					<span>Shorts</span>
				</Nav.Link>

				<Nav.Link className="nav-link ">
					<SubscriptionsIcon className="material-icons" />
					<span>Subscription</span>
				</Nav.Link>
				<div className="divider"> </div>
				<Nav.Link className="nav-link ">
					<LibraryAddCheckIcon className="material-icons" />
					<span>Library</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<HistoryIcon className="material-icons" />
					<span>History</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<PlayArrowIcon className="material-icons" />
					<span>Your Videos</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<WatchLaterIcon className="material-icons" />
					<span>Watch Later</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<ThumbUpIcon className="material-icons" />
					<span>Liked Videos</span>
				</Nav.Link>
				<div className="divider"> </div>
				Explore
				<Nav.Link className="nav-link ">
					<LocalFireDepartmentIcon className="material-icons" />
					<span>Trending</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<MusicNoteIcon className="material-icons" />
					<span>Music</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<MovieIcon className="material-icons" />
					<span>Movies</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<SportsEsportsIcon className="material-icons" />
					<span>Gaming</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<NewspaperIcon className="material-icons" />
					<span>News</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<EmojiEventsIcon className="material-icons" />
					<span>Sports</span>
				</Nav.Link>
				<Nav.Link className="nav-link ">
					<DryCleaningIcon className="material-icons" />
					<span>Fashon & Beauty</span>
				</Nav.Link>
			</Nav>
		</div>
	);
}
export default Sidebar;