import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";
import { useState } from 'react';
//data list
import Users from '../data/Users';
import RenderList from '../data/RenderList';

const onAddContact = (e) => {
	e.preventDefault();
	let {name,email} = document.forms[0];
	let splitName = name.value.split(' ');
	let getInitial = '';
	for (let i = 0; i < splitName.length; i++) {
		if (splitName[i][0]!==undefined) {
			getInitial += splitName[i][0];
		}
	}
	Users.push({userName: name.value, userEmail: email.value, userInitial: getInitial.toUpperCase()});
	console.log(Users);
} 
function ContactForm() {
	
	const [,reloadPage] = useState(0);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleInput = (e) => {
		if (e.target.name === 'name') {
			setName(e.target.value);
		} else {
			setEmail(e.target.value);
		}
	}
	return (
		<>
			<Form  onSubmit= {(e) => { 
						onAddContact(e);
						setName('');
						setEmail('');
						reloadPage(Math.random());}} >
				<h1>Contact Registration Form</h1>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<FloatingLabel label="Name" controlId="floatingInput" className='mb-3 mt-4'>
						<Form.Control type="text" placeholder="name" required name="name" value={name} onChange={handleInput}/>
					</FloatingLabel>
					<FloatingLabel label="E-mail" controlId="floatingInput" className='mb-3'>
						<Form.Control type="email" placeholder="email" required name="email" value={email} onChange={handleInput}/>
					</FloatingLabel>
					<Button variant="primary" type="submit">Add</Button>	
				</Form.Group>
			</Form>
			<div className='user-list-container'>
				<div>CONTACTS</div>
				<RenderList />
			</div>
		</>
	);
}

export default ContactForm;
