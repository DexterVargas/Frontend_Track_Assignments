import React, { createContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";
import { useState , useEffect } from 'react';
import RenderList from '../data/RenderList';

export const Contacts  = createContext();

function ContactForm() {

	const [contacts, setContacts] = useState([]);
	const [inputs, setInputs] = useState({username: '', email: ''});

	useEffect(()=>{
		const items = JSON.parse(localStorage.getItem('contactlist'));
		if (items) {
			setContacts(items);
		}
	},[]); //initial render

	useEffect(() => {
		localStorage.setItem('contactlist', JSON.stringify(contacts));
    },[contacts]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let getInitial = inputs.username.split(' ').map((initial) => (initial[0])).join('').toUpperCase();
		const contactList = contacts.slice();
		contactList.push({userName: inputs.username, userEmail: inputs.email, userInitial: getInitial});
		setContacts(contactList);
		setInputs({username: '', email: ''});
	} 
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
			handleSubmit(e);
        }
    };

	const handleInputChange = (e) => {
		setInputs((input) => ({
			...input, 
			[e.target.name]: e.target.value
		}));
	}
    const handleDelete = (e) => {
		const newContactlist = contacts.slice();
        const splicedData = newContactlist.splice(e.target.value,1);
        alert(`Contact Deleted. ${JSON.stringify(splicedData)}`);
		setContacts(newContactlist);
    }
	const values = {
		contacts,
		handleDelete
	}
	return (
		<>
			<Form>
				<h1>Contact Registration Form</h1>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<FloatingLabel label="Name" controlId="floatingInput" className='mb-3 mt-4'>
						<Form.Control type="text" placeholder="name" required name="username" value={inputs.username} onChange={handleInputChange} autoFocus/>
					</FloatingLabel>
					<FloatingLabel label="E-mail" controlId="floatingInput" className='mb-3'>
						<Form.Control type="email" placeholder="email" required name="email" value={inputs.email} onChange={handleInputChange} />
					</FloatingLabel>
					<Button variant="primary" type="submit" onKeyDown={handleKeyDown} onClick={handleSubmit}>Add</Button>	
				</Form.Group>
			</Form>
			<div className='user-list-container'>
				<div>CONTACTS</div>
					<Contacts.Provider value={values}>
						<RenderList />
					</Contacts.Provider>
			</div>
		</>
	);
}

export default ContactForm;