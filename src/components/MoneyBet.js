import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css";
import BetList from '../data/BetList';
import LogList from '../data/LogList';
import machine from '../assets/images/machine.png' 
import GameOver from './GameOver';
let bag;

const MoneyBet = () => {
    const [money, setMoney] = useState(500);
    const [chance, setChance] = useState(10);
    const [betType, setbetType] = useState(0);
    const [betReward, setbetReward] = useState(0);
    const [bet, setBetButton] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleBet = (e) => {
        let index = e.target.value;
        let randBetVal = Math.floor(Math.random()*BetList[index].max) - BetList[index].min;
        setbetType(index);
        setbetReward(randBetVal);
        setMoney(money + randBetVal)
        setChance(chance-1);
	}

    if (chance<=9 && chance >= 0) {
        let variance = betReward <= 0 ? 'danger' : 'success';
        LogList.push(<Alert key={betReward+chance} variant={variance} className='p-1 m-1'>
                        <p className='text-left'>
                        *${new Date().toLocaleString()} | You clicked "${BetList[betType].betTitle}", value is ${betReward}. Current Money is ${money} with {chance} chance/s left.
                        </p>
                    </Alert>);  
    }  

    useEffect(() => {
        if (money <= 0 || chance === 0) {
            console.log('loading game over');
            LogList.push(<Alert key='gameover' variant='warning' className='p-1'>
                            <p className='text-left'>GAME OVER!!!</p>
                        </Alert>);
            bag = money;
            setbetType(0);
            setbetReward(0); 
            setModalShow(true);
            setMoney(500)
            setChance(10);
            setBetButton(true);
           
        }
    },[money, chance]);

    const logs = LogList.map((log) => {
        return (log);
    });

    const generateMachine = BetList.map((bets,index) => {
        return (<Card style={{ width: '200px'}} className='d-inline-block m-2 mt-3 p-2' key={index}>
                    <Card.Img variant="top" src={machine} className='machine-img position-relative' alt='machine'/>
                    <h1 className='position-absolute text-center generate-number'>💲💲💲</h1>
                    <Card.Body className='p-0'>
                        <Card.Title as='h4' className='mt-2'>
                            {bets.betTitle}
                        </Card.Title>
                        <Button variant="outline-danger" 
                                    className='mt-1' 
                                    name='next'
                                    value={index}
                                    disabled={bet}
                                    onClick={handleBet}  
                                    >Bet💸
                        </Button>
                        <Card.Text className='text-center mt-2'>
                            <span className='border-top mt-3 details'>{bets.min} to {bets.max}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>);
    });
    return (
        <>
            <h1>Your Money💵:{money}</h1>
            <h2>Chance/s left♾️: {chance}</h2>

            { generateMachine }
            
            <div style={{ width: '870px', height:'500px', overflowY:'scroll'}} className='mx-auto'>
                { logs }
            </div>
            <GameOver
                show={modalShow}
                onHide={() => setModalShow(false)}
                dollar = {bag}
            />
        </>
    );
}

export default MoneyBet;