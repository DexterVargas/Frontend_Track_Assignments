import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";
//data list
import Users from '../data/Users';
import ProductItems from './productFormComponents/ProductItems';
import OrderModal from './productFormComponents/OrderModal';

function ContactForm() {
	// user inputs
	const [inputs, setState] = useState({
		name:'',
		address: '',
		number: '',
	});
	// modal
	const [show, setShow] = useState(false);
	
	const handleChange = (e) => {
		setState((inputs) => ({
			...inputs,
			[e.target.name]: e.target.value
		}));
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		Users.push(inputs);
		setShow(true);
	} 

	return (
		<>
			<Form  onSubmit= {(e) => { 
						handleSubmit(e);
						// setState({
						// 	name:'',
						// 	address: '',
						// 	number: '',
						// });
					}} >
			
				<h1>Contact Registration Form</h1>
				<Form.Group className="mb-3" controlId="formOrder">
					<FloatingLabel label="Name" controlId="floatingInput" className='mb-3 mt-4'>
						<Form.Control type="text" placeholder="name" required name="name" value={inputs.name} onChange={handleChange}/>
					</FloatingLabel>
					<FloatingLabel label="Address" controlId="floatingInput" className='mb-3'>
						<textarea className="form-control" id="address" name='address' placeholder='Address...' value={inputs.address} onChange={handleChange} ></textarea>
					</FloatingLabel>
					<FloatingLabel label="Number" controlId="floatingInput" className='mb-3'>
						<Form.Control type="text" placeholder="Phone Number" required name="number" value={inputs.number} onChange={handleChange}/>
					</FloatingLabel>
						<ProductItems />
					<div>
						<Button variant="primary" type="submit" size="lg" className='w-50 mt-4'>Place Order</Button>	
					</div>
				</Form.Group>
			</Form>
			<Modal show={show} onHide={() => setShow(false)} size='lg'>
				<OrderModal/>
			</Modal>
		</>
	);
}

export default ContactForm;
