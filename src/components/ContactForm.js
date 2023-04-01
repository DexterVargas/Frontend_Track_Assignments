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

const UserList = () => {
	let userList = [];
	for (let i = 0; i < Users.length; i++) {
		userList.push(<RenderList key={i} userName={Users[i].userName} userEmail={Users[i].userEmail} userInitial={Users[i].userInitial} />);
	}
	return userList;
	//  const userList = Users.map((user,ind) => (<RenderList key={ind} userName={user.userName} userEmail={user.userEmail} userInitial={user.userInitial} />));
	//  return userList;
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
			<Form>
				<h1>Contact Registration Form</h1>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<FloatingLabel label="Name" controlId="floatingInput" className='mb-3 mt-4'>
						<Form.Control type="text" placeholder="name" required name="name" value={name} onChange={handleInput}/>
					</FloatingLabel>
					<FloatingLabel label="E-mail" controlId="floatingInput" className='mb-3'>
						<Form.Control type="email" placeholder="email" required name="email" value={email} onChange={handleInput}/>
					</FloatingLabel>
					<Button variant="primary" type="reset" onClick= {(e) => { 
						onAddContact(e);
						setName('');
						setEmail('');
						reloadPage(Math.random());}} >Add</Button>	
				</Form.Group>
			</Form>
			<div className='user-list-container'>
				<div>CONTACTS</div>
				<UserList />
			</div>
		</>
	);
}

export default ContactForm;
