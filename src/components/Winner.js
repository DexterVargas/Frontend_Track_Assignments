import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";
import MC from '../assets/images/MC.png';
import DC from '../assets/images/DC.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Winner = (props) => {
    let mcRes,dcRes ;
    (props.res.mcu > props.res.dcu) ? mcRes = 'MARVEL Wins!!🏆🥇' : dcRes = 'DC Wins!!🏆🥇'
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>
                    RESULT: {mcRes}{dcRes}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='res-container' >
                    <Form.Group controlId='pollsurvey1'>
                        <Form.Label as="h1">
                            <img className='logo-img' src={MC} alt='mcu'/>
                            <strong className='position-absolute'>{mcRes}</strong>
                            <ProgressBar variant="success" 
                                        now={props.res.mcu*10} 
                                        label={`${props.res.mcu*10}%`} 
                                        min={0} 
                                        max={100}/>
                        </Form.Label> 
                    </Form.Group>
                    <Form.Group controlId='pollsurvey2'>
                        <Form.Label as="h1">
                            <img className='logo-img' src={DC} alt='dcu'/>
                            <strong className='position-absolute'>{dcRes}</strong>
                            <ProgressBar variant="success" 
                                        now={props.res.dcu*10} 
                                        label={`${props.res.dcu*10}%`} 
                                        min={0} 
                                        max={100} />
                        </Form.Label> 
                    </Form.Group>
                </div>
            </Modal.Body>
        </>
    );
}

export default Winner;