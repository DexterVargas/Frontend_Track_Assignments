import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";
import img1 from '../assets/images/bed.jpg'
import img2 from '../assets/images/bulb.png'
import img3 from '../assets/images/on.png'
import img4 from '../assets/images/off.png'
import img5 from '../assets/images/smirk.gif'
import img6 from '../assets/images/dark.jpg'
import audioOn from '../assets/media/on.mp3'
import audioOff from '../assets/media/off.mp3'
//data list

function FormOnOff() {
	const [status, setSwitch] = useState(true);

	const handleLights = () => {
		(status) ? setSwitch(false) : setSwitch(true);
	}
	if (status) {
		return (
			<div className='img-container '>
				<audio src={audioOn} autoPlay loop> </audio>
				<img src={img1} className='bed' alt='bed'/>
				<img src={img2} className='bulb' alt='bulb'/>
				<img src={img3} className='bulb onoff on' alt='onOff' onClick={handleLights}/>
			</div>
		);
	} else {
		return ( 
			<div className='img-container '>
				<audio src={audioOff} autoPlay loop> </audio>
				<img src={img6} className='bed dark' alt='bed1'/>
				<img src={img2} className='bulb bulbdark' alt='bulb'/>
				<img src={img4} className='bulb onoff off' alt='onOff' onClick={handleLights}/>
				<img src={img5} className='bulb smirk' alt='smirk'/>
			</div>
		);
	}
}

export default FormOnOff;
