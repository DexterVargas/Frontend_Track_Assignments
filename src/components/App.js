import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import VideoFeed from './pages/VideoFeed';
import NotMatch from './pages/NoMatch';
import './YTstyle.css'
import React, { useEffect, useState, createContext} from "react";
import useAxiosAPI from './pages/assignments/data/api/useAxiosAPI';
import DATA from './pages/assignments/data/DATA'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Control = createContext();

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [fetchData, setfetchData] = useState('');
    const [fethcedSearch, setfetchedSearch] = useState([]);

    useEffect(()=>{
        if (fetchData) {
            fetUrl();
            // DATA.length = 0;
            // [].push.apply(DATA, fethcedSearch);
            // console.log(DATA);
        }
    },[fetchData]);

    const handleChange= (e) => {
		setSearchValue(e.target.value);
	}

    const fetUrl = () => {
        useAxiosAPI.get('/search',{
            params: {
                q: searchValue,
                maxResults: 10
            }
        })
        .then((res) => {
            console.log('AXIOS RESULT: ', res.data.items);
            setfetchedSearch(res.data.items);
        })
        .catch(( err) => console.error(err));
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setfetchData(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q=${searchValue}&key={mytokenKey}`);
        
	}
	const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setfetchData(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q=${searchValue}&key={mytokenKey}`);
        }
	}
    let values = {
        searchValue,
        setSearchValue,
        fetchData,
        setfetchData,
        handleChange,
        handleSearch,
        handleEnter,
        fethcedSearch,
        setfetchedSearch, 
        DATA
    }
    return (
        <Control.Provider value = {values}>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/video/:id/:title/:channelTitle' element={<VideoFeed/>}></Route>
                {/* <Route exact path='/channel/:id' element={<ChannelFeed/>}></Route> */}
                {/* <Route exact path='/search/:searchQuery' element={<SearchFeed/>}></Route> */}
                <Route path='*' element={<NotMatch/>}></Route>
			</Routes>
        </Control.Provider>
    );    
}
export default App;