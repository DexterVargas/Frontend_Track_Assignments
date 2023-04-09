import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { useContext } from 'react';
import { Control } from '../App';
const Content = () => {
	const dataSearch = useContext(Control);//{data[0].items.map((item) => ( 
	let fetchData;
	if (dataSearch.fethcedSearch.length !== 0) {
		fetchData = dataSearch.fethcedSearch;
	} else {
		fetchData = dataSearch.DATA;
	}
	console.log(fetchData);
return (
	<div className='content'>		
		
		{fetchData.map((item) => (
			<div className="videos" key={uuid()}>
				<div className="video">
					<div className="thumbnail">
						<Link to={`/video/${item.id.videoId}/${item.snippet.title}/${item.snippet.channelTitle}`} className='thumbnail-link'>
							<img src={item.snippet.thumbnails.high.url} alt={item.snippet.thumbnails.high.url} title={item.snippet.title} />
						</Link> 
					</div>
					<div className="details">
						<div className="author">
							<img src={item.snippet.thumbnails.default.url} alt={item.snippet.channelTitle} />
						</div>
						<div className="title">
							<h3>
								<Nav.Link href="">
									{item.snippet.title}
								</Nav.Link>
							</h3>
							<Nav.Link href="">{item.snippet.channelTitle}</Nav.Link>
							{/* <span> 2M Views • 3 Months Ago </span> */}
						</div>
					</div>
				</div>
			</div>
		))}
	</div>

);
}

export default Content;