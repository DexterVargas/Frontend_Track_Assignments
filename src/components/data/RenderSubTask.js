import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../TaskLogger.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { TaskContext } from '../TaskLogger';
import { useContext, useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'Pending': {
            return  state.map((task) => {
                if (task.id === action.currentID) {
                    console.log(task.subtask);
                    task.subtask.map((sub, ind) => {
                        if (sub.id === action.subID) {
                            task.subtask[ind].status = action.type;
                            task.subtask[ind].color = 'secondary';
                            localStorage.setItem('task', JSON.stringify(state));
                        }
                        return sub
                })
            }
            return task
            });
        }
        case 'Ongoing': {
            return  state.map((task) => {
                if (task.id === action.currentID) {
                    console.log(task.subtask);
                    task.subtask.map((sub, ind) => {
                        if (sub.id === action.subID) {
                            task.subtask[ind].status = action.type;
                            task.subtask[ind].color = 'warning';
                            localStorage.setItem('task', JSON.stringify(state));
                        }
                        return sub
                })
            }
            return task
            });
        }
        case 'Completed': {
            return  state.map((task) => {
                if (task.id === action.currentID) {
                    console.log(task.subtask);
                    task.subtask.map((sub, ind) => {
                        if (sub.id === action.subID) {
                            task.subtask[ind].status = action.type;
                            task.subtask[ind].color = 'success';
                            localStorage.setItem('task', JSON.stringify(state));
                        }
                        return sub
                    })
                }
                return task
            });
        }
        default:
            return state;
    }
}
const RenderSubTask = ({id}) => {
    const currentID = id;
    const data = useContext(TaskContext);
    const taskList = data.tasks;
    const [tasks, setTasks] = useState(taskList);
    const [state, dispatch] = useReducer(reducer, taskList);
    const [subTaskTitle, setsubTaskTitle] = useState('');

    const handleChange = (e) => {
        setsubTaskTitle(e.target.value);
        console.log(subTaskTitle);
    }

	const handleSubmit = (e) => {
		e.preventDefault();
		const subtaskList = tasks.slice();
        subtaskList.map((task) => {
            if (task.id === currentID) {
                task.subtask.push({id: uuid(), title: subTaskTitle, status:'Ongoing', color:'warning', added: new Date().toLocaleString()});
            }
            return null
        });
		localStorage.setItem('task', JSON.stringify(subtaskList));
        setsubTaskTitle('');
        data.percentageComputer();
	} 

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
			handleSubmit(e);
        }
    };

    const handleSubClick = (e) => {
        const mark = e.target.value
        const todoID = e.target.name;
        dispatch({ type: mark , currentID: currentID, subID:todoID });
        data.percentageComputer();
    }

    return (
        <>
         {tasks.map((task) => {
            if (task.id === currentID) {
                return( 
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title as='h1' className='text-center'>
                            {task.title}
                            <p className='lastadded'> Last Added: {(task.subtask.length > 0)? task.subtask[task.subtask.length-1].added: ''}</p>
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div className='res-container' key={uuid()} >
                                <Form.Group controlId='pollsurvey1' className='mb-3'>
                                    <FloatingLabel label="Type your Subtask:" controlId="addSub" className='mb-3 mt-4'>
                                        <Form.Control type="text" placeholder="name" required name="subtask" value={subTaskTitle} onChange={handleChange} autoFocus/>
                                    </FloatingLabel>
                                    <Button variant="primary" type="submit" onKeyDown={handleKeyDown} onClick={handleSubmit}>Add</Button>	
                                </Form.Group>
                            </div>
                            <div className='sub-task' key={uuid()}>
                                {task.subtask.map((sub) => (
                                <div key={uuid()} border={`${sub.color}`} className={`bg-${sub.color}`} >
                                    <span>{sub.title}</span>
                                    <div className='float-end'>
                                        <Button variant='outline-light' name={sub.id} onClick={handleSubClick} value='Pending' >
                                            <AccessTimeIcon style={{color:'gray'}}/>
                                        </Button>
                                        <Button variant='outline-light' name={sub.id} onClick={handleSubClick} value='Ongoing' >
                                            <DataUsageIcon style={{color:'#aaaa00'}}/>
                                        </Button>
                                        <Button variant='outline-light' name={sub.id} onClick={handleSubClick} value='Completed'>
                                            <CheckCircleOutlineIcon style={{color:'green'}}/>
                                        </Button>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </Modal.Body> 
                    </>
                )
            }
            return null
            })}
        </>
    );
}

export default RenderSubTask;