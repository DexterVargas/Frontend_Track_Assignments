import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
const GameOver = (props) => {
    let check;
    if (props.dollar < 0) {
        check = <h1 className='text-center' variant='danger'>Money in the bank: 😓💲<Badge bg="danger">{props.dollar}</Badge> 💸</h1>;
    } else {
        check = <h1 className='text-center' variant='success'>Money in the bank: 🤑💲<Badge bg="success">{props.dollar}</Badge> 💰💵 </h1>;
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="gameover" centered >
            <Modal.Header closeButton>
                <Modal.Title id="GAME-OVER">
                    GAME OVER!!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {check}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
  }

  export default GameOver;