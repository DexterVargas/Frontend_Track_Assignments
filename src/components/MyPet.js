import React, { useEffect, useState } from 'react';
import {Container , Row, Col} from 'react-bootstrap'  
import {Button , Form, FloatingLabel} from 'react-bootstrap'  
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/OverlayTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";
import window from '../assets/images/window.png'
import dog from '../assets/images/dog.png'
// import cat from '../assets/images/cat.png'
import pet1 from '../assets/images/pets/pet1.gif'
import pet2 from '../assets/images/pets/pet2.gif'
import pet3 from '../assets/images/pets/pet3.gif'
import pet4 from '../assets/images/pets/pet4.gif'
const petIntro = ['🐶woofwoof. !"m FELIX.', '🐱wiiiiii🐀eow. MIA here.','Suki Suki🦴.MANDY']

const localStorageData = JSON.parse(localStorage.getItem('name')) || '[]'
const MyPet = () => {

    const [inputs, setState] = useState('');
    const [petName, setPetName] = useState('');
    const [name, setItems] = useState(localStorageData);
    const [show, setShow] = useState({petDiag1: false,petDiag2: false,petDiag3: false,petDiag4: false});

    const handleChange = (e) => {
        setState(e.target.value);
    }
    const handleSet = (e) => {
        e.preventDefault();
        setPetName(inputs);
        setItems(inputs);
        setShow((prev) => ({
            ...prev,
            ['petDiag1']: !show.petDiag1
        }));
	}
    const handleKeyDown = (e) => {
        console.log('entered');
        if (e.key === 'Enter') {
            e.preventDefault();
            setPetName(inputs);
            setItems(inputs);
            setShow((prev) => ({
                ...prev,
                ['petDiag1']: !show.petDiag1
            }));
        }
      };
    // useEffect(() => {
    //     if (name) {
    //         setItems([name]);
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(petName));
    }, [petName]);

    useEffect(() => {
        let timer;
        if (show.petDiag1) {
            timer = setTimeout(() => {
                setShow((prev) => ({
                    ...prev,
                    ['petDiag1']: !show.petDiag1,
                    ['petDiag2']: !show.petDiag2
                }));
            }, 3000);   
        }
          return () => clearTimeout(timer);
    },[petName,show.petDiag1]);

    useEffect(() => {
        let timer;
        if (show.petDiag2) {
            timer = setTimeout(() => {
                setShow((prev) => ({
                    ...prev,
                    ['petDiag2']: !show.petDiag2,
                    ['petDiag3']: !show.petDiag3
                }));
            }, 2000);   
        }
          return () => clearTimeout(timer);
    },[show.petDiag2]);

    useEffect(() => {
        let timer;
        if (show.petDiag3) {
            timer = setTimeout(() => {
                setShow((prev) => ({
                    ...prev,
                    ['petDiag3']: !show.petDiag3,
                    ['petDiag4']: !show.petDiag4
                }));
            }, 2000);   
        }
          return () => clearTimeout(timer);
    },[show.petDiag3]);

    useEffect(() => {
        let timer;
        if (show.petDiag4) {
            timer = setTimeout(() => {
                setShow((prev) => ({
                    ...prev,
                    ['petDiag4']: !show.petDiag4
                }));
            }, 2000);   
        }
          return () => clearTimeout(timer);
    },[show.petDiag4]);

    return (
        <>
             <Form className='position-absolute form-container' onSubmit={handleSet}>
                <Form.Group className="mb-3" controlId="formPetName">
                    <FloatingLabel label="Set Pet Name" controlId="floatingInput" className='mb-3 mt-4'>
						<Form.Control type="text" placeholder="Name" required name="name" value={inputs} onChange={handleChange} onKeyDown={handleKeyDown} style={{ width: '100%'}}/>
					</FloatingLabel>
                </Form.Group>
                <Button variant="primary" className='mt-2' type='submit' name='petDiag1'>Set Pet Name🐱🐶</Button>
            </Form>

            <Container>  
                <Row className='row-container'>  
                    <Col className="p-2 col-container">
                        <Overlay placement="top" 
                                overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Body>
                                            Hi! i'm <strong>{petName}</strong>. Nice to meet you!
                                        </Popover.Body>
                                    </Popover>
                                } show={show.petDiag1}>
                            <img src={window} alt='houseframe' className='window' />    
                        </Overlay>
                        <img src={pet1} alt='pet' className='pet'></img>   
                    </Col>  
                    <Col className="p-2 col-container">

                        <Overlay placement="left" 
                                overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Body>
                                            Hello! <strong>{petIntro[0]}</strong>
                                        </Popover.Body>
                                    </Popover>
                                } show={show.petDiag2}>
                            <img src={window} alt='houseframe' className='window' />
                        </Overlay>
                        <img src={pet2} alt='pet' className='pet'></img>
                    </Col>  
                </Row>  
                <Row className='row-container'>  
                    <Col className="p-2 col-container">
                        <Overlay placement="top" 
                                overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Body>
                                            hahaha! <strong>{petIntro[1]}</strong>.😹😼
                                        </Popover.Body>
                                    </Popover>
                                } show={show.petDiag3}>
                            <img src={window} alt='houseframe' className='window' />
                        </Overlay>
                        <img src={pet3} alt='pet' className='pet'></img>
                    </Col>  
                    <Col className="p-2 col-container">
                        <Overlay placement="right" 
                                overlay={
                                    <Popover id="popover-basic">
                                        <Popover.Body>
                                            Beshie! <strong>{petIntro[2]}</strong>
                                        </Popover.Body>
                                    </Popover>
                                } show={show.petDiag4}>
                            <img src={window} alt='houseframe' className='window' />
                        </Overlay>
                        <img src={pet4} alt='pet' className='pet'></img>
                    </Col>  
                </Row>  
            </Container>  
            <div className='mx-auto'>
                <img src={dog} style={{ width: '30%', filter:'grayscale(1)'}} alt='houseframe' className='position-absolute bg-pet' />
            </div>
        </>
    );
}

export default MyPet;