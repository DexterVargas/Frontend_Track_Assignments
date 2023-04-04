import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";
import SurveyList from '../data/SurveyList';
import Winner from './Winner';
const Survey = () => {
    //states
    const [score, setScore]  = useState({ mcu: 0, dcu: 0 });
    const [next, setNext]    = useState(1);
    const [show, setShow]    = useState(false);
    const [inputs, setInput] = useState(false);
    //event handlers
	const handleChange = (e) => {
        setInput(!inputs);
		setScore((score) => ({
			...score,
			[e.target.name]: Number(e.target.value) + 1
		}));
	}
    const handleNext = (e) => {
        setInput(!inputs);
        (next<SurveyList.length) ? setNext(next+1) : setShow(!show.modal);
	}
    const handleClosedModal = () => {
        setInput(inputs);
        setShow(false);
        setScore({mcu:0, dcu:0});
        setNext(1);
    }

    return (
        <>
            <Card style={{ width: '700px'}} className='mx-auto mt-5'>
                <Card.Img variant="top" src={SurveyList[next-1].imgUrl} className='survey-img'/>
                <Card.Body>
                    <Card.Title>
                        <p>Survey {next}:</p> 
                        <h1 className='border-top'>{SurveyList[next-1].title}</h1>
                    </Card.Title>
                    <Card.Text className='text-center'>
                        <span className='survey-details border-top'>{SurveyList[next-1].details}</span>
                    </Card.Text>
                    <Button variant="outline-info" 
                            className='m-3' 
                            name='mcu' 
                            value={score.mcu} 
                            onClick={handleChange} 
                            disabled={inputs}>MC-verse</Button>
                    <Button variant="outline-info" 
                            className='m-3' 
                            name='dcu' 
                            value={score.dcu} 
                            onClick={handleChange} 
                            disabled={inputs}>DC-verse</Button>
                            
                    <div>
                        <Button variant="outline-primary" 
                                className='d-block mt-3 float-end' 
                                name='next' onClick={handleNext} 
                                disabled={!inputs}>Next&#187;</Button>
                    </div>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClosedModal} size='lg' name='modal'>
                <Winner res={score} />
			</Modal>
        </>
    );
}

export default Survey;