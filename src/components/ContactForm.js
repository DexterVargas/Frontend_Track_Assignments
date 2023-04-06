import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";
import { useState , useEffect } from 'react';
import RenderList from '../data/RenderList';
const itemsLocalStorage = JSON.parse(localStorage.getItem('contactlist')) || [];
function ContactForm() {
	const [,reloadPage] = useState(0);
	const [inputs, setInputs] = useState({username: '', email: ''});
	const [contacts, setContacts] = useState(itemsLocalStorage);//first load only

	useEffect(() => {
		localStorage.setItem('contactlist', JSON.stringify(contacts));
    }, [contacts]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let getInitial = inputs.username.split(' ').map((initial) => (initial[0])).join('').toUpperCase();
		const contactList = contacts;
		contactList.push({userName: inputs.username, userEmail: inputs.email, userInitial: getInitial});

		setContacts(contactList);
		localStorage.setItem('contactlist', JSON.stringify(contactList));
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
        const splicedData = contacts.splice(e.target.value,1);
        alert(`Contact Deleted. ${JSON.stringify(splicedData)}`)
        localStorage.setItem('contactlist', JSON.stringify(contacts));
        reloadPage(Math.random());
    }
	return (
		<>
			<Form  onSubmit= {(e) => { 
						handleSubmit(e);
						setInputs({username: '', email: ''});
						reloadPage(Math.random());
					}} >
				<h1>Contact Registration Form</h1>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<FloatingLabel label="Name" controlId="floatingInput" className='mb-3 mt-4'>
						<Form.Control type="text" placeholder="name" required name="username" value={inputs.username} onChange={handleInputChange} autoFocus/>
					</FloatingLabel>
					<FloatingLabel label="E-mail" controlId="floatingInput" className='mb-3'>
						<Form.Control type="email" placeholder="email" required name="email" value={inputs.email} onChange={handleInputChange} />
					</FloatingLabel>
					<Button variant="primary" type="submit" onKeyDown={handleKeyDown}>Add</Button>	
				</Form.Group>
			</Form>
			<div className='user-list-container'>
				<div>CONTACTS</div>
					{/* <ContactContext.Provider value={[contacts, setContacts]}> */}
						<RenderList data={itemsLocalStorage} handleDelete={handleDelete}/>
					{/* </ContactContext.Provider> */}
			</div>
		</>
	);
}

export default ContactForm;