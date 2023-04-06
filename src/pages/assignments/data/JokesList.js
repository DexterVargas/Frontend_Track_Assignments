import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../assets/stylesheets/style.css"
import ApiURL from './api/jokes';
import { useEffect, useState } from 'react';
import woman from '../../../assets/images/meme/yell.jpg'
import cat from '../../../assets/images/meme/cat.jpg'

const JokesList = () => {
    useEffect(()=>{
        getJoke();
    },[]);

    const [joke, setJoke] = useState({
        setup:'',
        punchline: ''
    });

    const getJoke = () => {
       ApiURL.get()
        .then((res) => {
            setJoke((prev)=>({
                ...prev,
                ['setup']: res.data.setup,
                ['punchline']: res.data.punchline
            }));
        })
        .catch(( err) => console.error(err));
    }

    return (
        <div className='meme-container position-relative' >
            <img src={woman} alt='yelling' style={{width:'600px'}}/>
            <h1 className='position-absolute setup'> {joke.setup}</h1>
            <h1 className='position-absolute punchline'>{joke.punchline}</h1>
            <img src={cat} alt='confused' style={{width:'600px'}}/>
        </div>
    )
}

export default JokesList;