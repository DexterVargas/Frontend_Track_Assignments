import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/stylesheets/style.css";
import { useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import JokesList from './data/JokesList';

// const emojis = ['👍', '👎', '😍', '😅', '🤣', '😓', '😆', '😮', '😠', '🤬'];
const Jokes = () => {
	const [socials, setReact] = useState({
		emoji1: 0,
		emoji2: 0,
		emoji3: 0,
		emoji4: 0,
		emoji5: 0,
		emoji6: 0,
		emoji7: 0,
		emoji8: 0,
		emoji9: 0,
		emoji10: 0,
	});
	const handleReaction = (e) => {
		setReact((emo) => ({
			...emo,
			[e.target.accessKey] : Number(e.target.id) + 1
		}));
	}
	return (
		<>
             <Card style={{ width: '700px'}} className='mx-auto mt-5'>
				<Button variant="outline-secondary" text="white" className='m-2 random' onClick={()=> window.location.reload(false)}> 🔀random </Button>
                <Card.Body>
                    <Card.Title>
						<JokesList />
                    </Card.Title>
                </Card.Body>
				<div>
					<h1 className='emoji' accessKey='emoji1' id={socials.emoji1} onClick={handleReaction}>
						👍<Badge bg='light' text='dark'>{socials.emoji1}</Badge>
					</h1>
					<h1 className='emoji' accessKey='emoji2' id={socials.emoji2} onClick={handleReaction}>
						👎<Badge bg='light' text='dark'>{socials.emoji2}</Badge>
					</h1>
					<h1 className='emoji' accessKey='emoji3' id={socials.emoji3} onClick={handleReaction}>
						😍<Badge bg='light' text='dark'>{socials.emoji3}</Badge>
					</h1>
					<h1 className='emoji' accessKey='emoji4' id={socials.emoji4} onClick={handleReaction}>
						😅<Badge bg='light' text='dark'>{socials.emoji4}</Badge>
					</h1>
					<h1 className='emoji' accessKey='emoji5' id={socials.emoji5} onClick={handleReaction}>
						🤣<Badge bg='light' text='dark'>{socials.emoji5}</Badge>
					</h1>
					<h1 className='emoji' accessKey='emoji6' id={socials.emoji6} onClick={handleReaction}>
						😓<Badge bg='light' text='dark'>{socials.emoji6}</Badge>
					</h1>
					<h1 className='emoji' accessKey='emoji7' id={socials.emoji7} onClick={handleReaction}>
						😆<Badge bg='light' text='dark'>{socials.emoji7}</Badge>
					</h1>
					<h1 className='emoji' accessKey='emoji8' id={socials.emoji8} onClick={handleReaction}>
						😮<Badge bg='light' text='dark'>{socials.emoji8}</Badge>
					</h1>
					<h1 className='emoji' accessKey='emoji9' id={socials.emoji9} onClick={handleReaction}>
						😠<Badge bg='light' text='dark'>{socials.emoji9}</Badge>
					</h1>
					<h1 className='emoji' accessKey='emoji10' id={socials.emoji10} onClick={handleReaction}>
						🤬<Badge bg='light' text='dark'>{socials.emoji10}</Badge>
					</h1>
				</div>

			</Card>
		</>
	);
}

export default Jokes;