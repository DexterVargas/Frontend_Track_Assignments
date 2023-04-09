import Iframe from 'react-iframe'
import { useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Control } from '../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import '../YTstyle.css'

const VideoFeed = () => {
    const dataSearch = useContext(Control);//{data[0].items.map((item) => ( 
    let fetchData;
    if (dataSearch.fethcedSearch.length !== 0) {
        fetchData = dataSearch.fethcedSearch;
    } else {
        fetchData = dataSearch.DATA;
    }
    const { id, title,channelTitle } = useParams();

    return (
        <div className='videos-view'>
            <div className=''>
                <div className="embed-responsive embed-responsive-16by9">
                    <Iframe url= {'https://www.youtube.com/embed/'+id}
                    title={id}
                    className="videofeed"
                    height="100%"
                    styles={{width:"1020px" ,height:"630px"}}/>
                </div>
                <h1 style={{width: '1020px'}}>{title}</h1>
                <p style={{width: '1020px'}}>{channelTitle}</p>
            </div>

            <div className="side-bar-right">
                <Nav>
                    {fetchData.map((item) => (
                    <div className="videos" key={uuid()}>
                        <div className="video video-feed-thumbnail">
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
			    </Nav>
		    </div>
        </div>



    );
}

export default VideoFeed;



