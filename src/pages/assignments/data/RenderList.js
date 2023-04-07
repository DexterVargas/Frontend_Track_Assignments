import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import "../TodoList.css"
import { TodoContext } from '../TodoList';
import { useContext, useEffect, useReducer } from 'react';
import uuid from 'react-uuid';

const reducer = (state, action) => {

    switch (action.type) {
        case 'Pending': {
            return state.map(task => {
                if (task.id === action.id) {task.color = 'danger'; task.status = action.type };
                return task; 
            });
        }
        case 'Ongoing': {
            return state.map(task => {
                if (task.id === action.id) {task.color = 'primary'; task.status = action.type };
                return task; 
            });
        }
        case 'Completed': {
            return state.map(task => {
                if (task.id === action.id) {task.color = 'success'; task.status = action.type };
                return task; 
            });
        }
        default:
            return state;
    }

}

const RenderList = () => {
    const data = useContext(TodoContext);
    const initialTodos = data.itemsLocalStorage;
    const [state, dispatch] = useReducer(reducer, initialTodos);

    useEffect(()=>{
        localStorage.setItem('tasklist', JSON.stringify(state));
    },[state]);

    const handleClick = (e) => {
        const mark = e.target.slot
        const todoID = e.target.name;
        dispatch({ type: mark , id:todoID });
    }

    const userList = state.map((user,ind) => 
        (
        <div  key={user.id} className='d-inline-block m-3'>
            <Card style={{ width: '500px', height:'280px' }} border={`${user.color}`}>
                <Card.Header as="h4" className={`bg-${user.color} text-light`}>{user.status}</Card.Header>
                <Card.Body>     
                    <Card.Title as='h1'>Task#{ind+1}: {user.title}</Card.Title>
                    <Card.Text className='mt-3'>
                        Details: {user.details}
                    </Card.Text>
                    <Card.Text as="div" className='mark-task'>
                        <h4 className='marked'>Marked task as:</h4>
                        <div className="mb-3 d-flex justify-content-evenly">
                            {['Pending','Ongoing','Completed'].map((mark) => (
                                <div key={uuid()} className='d-inline-block '>
                                    <Form.Check inline name={user.id} slot={mark} id={mark+user.id} type='radio' onChange={handleClick} checked={user.status === mark} value={user.status}/>
                                    <Form.Label htmlFor={mark+user.id} >{mark}</Form.Label> 
                                </div>
                            ))}
                    </div>

                    </Card.Text>
                    <Button variant='outline-light' name={user.id} className=' btn-delete btn-delete-todo' onClick={data.handleDelete}>
                        x
                    </Button>
                </Card.Body>
            </Card>
            { /* <div className='post-container'>
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
            </div>  */}
        </div>
        ));
    return userList;
}

export default RenderList;