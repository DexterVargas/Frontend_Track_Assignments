import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/stylesheets/style.css";
import Products from '../../data/Products';
const GenerateElements = (props) => {
    const [show, setShow] = useState(false);
    const [inputs, setState] = useState({
        quantity: 1,
        isChecked: false
    })
	const handleChange = (e) => {
        const { id } = e.target;
        if (e.target.type === 'checkbox'){
            setState((inputs) => ({
                ...inputs,
                [e.target.name]: e.target.checked
            }));
            Products.map((prod)=>{
                if(prod.id === id) {
                    prod.isChecked = !prod.isChecked;
                    return prod.isChecked;
                }
                return null;
            });
        } else {
            setState((inputs) => ({
                ...inputs,
                [e.target.name]: e.target.value
            }));
            Products.map((prod)=>{
                if(prod.id === id) {
                    prod.qty = e.target.value;
                    return prod.qty;
                }
                return null;
            });
        }
	}
	//options value
	let quantity = [];
    for (let i = 1; i < 100; i++) {
        quantity.push(<option value={i} key={i}>{i}</option>);
    }
    return (
        <div className='product-container' >
            <Form.Group controlId={props.id} >
                <Form.Check className='check' type='checkbox' name='isChecked' id={props.id} checked={inputs.isChecked} onChange={handleChange}/>
                <Form.Label>
                    <div className='img-container'>
                        <img className='product-img' src={props.src} alt={props.name}/>
                    </div>
                    <p className='product-name'>{props.name}</p>
                </Form.Label> 
            </Form.Group>
            <Toast onClose={() => setShow(false)} show={show} delay={8000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{props.name}</strong>
                </Toast.Header>
                <Toast.Body>{props.desc}</Toast.Body>
            </Toast>
            <span className='desc' onClick={() => setShow(true)}>show description</span>

            <p className='price'>${props.price}</p>
            <span>Quantity</span>
            <Form.Select className='quantity' name='quantity' id={props.id} value={inputs.quantity} onChange={handleChange}>
                {quantity}
            </Form.Select>
        </div>
    );
}

const ProductItems = () => {
	let items = [];
	for (let i = 0; i < Products.length; i++) {
		items.push(<GenerateElements src={Products[i].imgUrl[0]} name={Products[i].name} price={Products[i].price} desc={Products[i].description}  id={Products[i].id} key={Products[i].id}/>);
	}
	return items;
}

export default ProductItems;