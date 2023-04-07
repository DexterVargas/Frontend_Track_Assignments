import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../assets/stylesheets/style.css";
import React, { useEffect, useState } from "react";
// import api from './api/useAxiosAPI'
// import SplashComp from './data/SplashComp'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";
import Axios from 'axios';

const SplashComp = () => {
	const [searchValue, setSearchValue] = useState('');
    const [cliendId, setclientId] = useState('fQzuA7gox2Futpg5mk8z97DfNXGccoG06ZTI5FXDv4E');
    const [fetchData, setfetchData] = useState('');
    const [fethcedImages, setfetchedImages] = useState([]);
	const handleChange= (e) => {
		setSearchValue(e.target.value);
	}

    useEffect(()=>{
        if (fetchData) {
            fetUrl();
        }
    },[fetchData]);

    const fetUrl = () => {
        Axios.get(fetchData)
        .then((res) => {
            // console.log(res.data.results);
            setfetchedImages(res.data.results);
        })
        .catch(( err) => console.error(err));
    }
	const handleSearch = (e) => {
        const url = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${cliendId}`;
        setfetchData(url);
    	setSearchValue("");
	}
	const handleEnter = (e) => {
		if(e.key === 'Enter') {
            const url = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${cliendId}`;
            setfetchData(url);
            setSearchValue("");
		}
	}
   
	return (
		<div className='jumbotron'>
			<h1 className="display-4 mb-4">Image API</h1>
			<InputGroup className="mb-3 text-center mx-auto" style={{width:'400px'}}>
				<FloatingLabel label="🔍 search for images" controlId="floatingInput">
					<Form.Control type="email" placeholder="image" value={searchValue} onChange={handleChange} onKeyDown={handleEnter} required autoFocus/>
				</FloatingLabel>
				<Button variant="primary" type="submit" onClick={handleSearch} style={{width:'100px'}}><FaSearch /></Button>
			</InputGroup>
            <div className='galleryWrap'>
                {fethcedImages.map((img) => {return (<img src={img.urls.small} alt={img.alt_description} key={img.id} className='m-2 load-images'/>)})}
            </div>
		</div>

	);
}

export default SplashComp;