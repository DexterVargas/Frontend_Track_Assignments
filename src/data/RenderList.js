import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import "../assets/stylesheets/style.css"
import { useContext } from 'react';
import { Contacts } from '../components/ContactForm';

const RenderList = () => {
    const data = useContext(Contacts)
    
    const userList = data.contacts.map((user,ind) => 
        (<div className='post-container' key={ind}>
            <p className='post-avatar'>{user.userInitial}</p>
            <div className='post-contact-container'>
                <h1>{user.userName}</h1>
                <h2>
                    <a href='https://www.hackerhero.com/reactjs-with-wordpress/contact-list'>{user.userEmail}</a>
                </h2>
                <Button variant='outline' className='btn-delete' value={ind} onClick={data.handleDelete}>
                    x
                </Button>
            </div>
        </div>));
    return userList;
}

export default RenderList;