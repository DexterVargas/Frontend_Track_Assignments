import React from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/stylesheets/style.css";
import Products from "../../data/Products";
import Users from "../../data/Users";

function OrderModal() {
    const user = Users[Users.length -1];
    let renderCart = [];
    let grandTotal = 0;
    Products.map((prod)=>{
        if(prod.isChecked === true) {
            console.log(prod);
            let subtotal = prod.qty * prod.price;
            grandTotal+=subtotal;
            renderCart.push(
                <div className='cart-container' >
                    <Form.Group controlId={prod.id}>
                        <Form.Label>
                            <img className='cart-img' src={prod.imgUrl[0]} alt={prod.name}/>
                            <div className='name-container'>
                                <h4>{prod.name}</h4>
                                <p>{prod.description}</p>
                                <p>${prod.price}</p>
                            </div>
                            <div className="compute-container">
                                <span className='price'>{prod.qty} x ${prod.price} =</span><span className="subtotal">${subtotal}</span>
                            </div>
                        </Form.Label> 
                    </Form.Group>
                </div>
            )
        }
        return null
    });

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Thank you for your order. {' ' +  user.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {renderCart}
                <h3>Grand Total:  ${grandTotal}</h3>
                <p>Address: {user.address} </p>
                <p>#: {user.number}</p> 
            </Modal.Body>
        </>
    );

}

export default OrderModal;