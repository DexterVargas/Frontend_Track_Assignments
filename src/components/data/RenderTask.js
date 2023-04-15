import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import "../TaskLogger.css"
import { TaskContext } from '../TaskLogger';
import { useContext, useState } from 'react';
import uuid from 'react-uuid';
import ProgressBar from 'react-bootstrap/ProgressBar';
import DeleteIcon from '@mui/icons-material/Delete';
import RenderSubTask from './RenderSubTask';
import Modal from 'react-bootstrap/Modal';

const RenderTask = () => {
    const data = useContext(TaskContext);
    const taskList = data.tasks;
    const [current, setCurrent] = useState('');
    const [show, setShow] = useState(false);

    const handleClickTask = (e) => {
        setCurrent(e.target.id);
        setShow(true);
    }

    const handleClosedModal = () => {
        setShow(false);
        setCurrent('');
        data.percentageComputer();
    }

    return (
        <div className='main-task-container'>
                <div className='sub-task-container'>
                    <h2>Front-End</h2>
                    {taskList.map((task) => {
                        if (task.type === 'Front-End'){ 
                            return (
                                <div key={uuid()} className='task-container' id = {task.id} onClick={handleClickTask} >
                                    <span>{task.title}</span>
                                    
                                    <ProgressBar
                                        variant={task.color}
                                        now={task.percentage} 
                                        label={`${Math.floor(task.percentage)}%`}
                                        min={0} 
                                        max={100}/>
                                    <Button variant='outline-light' name={task.id} className=' btn-delete btn-delete-todo' onClick={data.handleDelete}>
                                    <DeleteIcon />
                                    </Button>
                                </div>
                            )
                        } 
                        return null;
                    })}
                </div>
                <div className='sub-task-container'>
                    <h2>Back-End</h2>
                    {taskList.map((task) => {
                        if (task.type === 'Back-End'){ 
                            return (
                                <div key={uuid()} id = {task.id} className='task-container' onClick={handleClickTask} >
                                    <span>{task.title}</span>
                                    <ProgressBar 
                                        variant={task.color}
                                        now={task.percentage} 
                                        label={`${Math.floor(task.percentage)}%`}
                                        min={0} 
                                        max={100}
                                        />
                                    <Button variant='outline-light' name={task.id} className='btn-delete btn-delete-todo' onClick={data.handleDelete}>
                                    <DeleteIcon /> 
                                    </Button>
                                </div>
                            )
                        }
                        return null
                    })}
                </div>
                <Modal show={show} onHide={handleClosedModal} size='lg' name='modal'>
                    <RenderSubTask id = {current}/>
			    </Modal>
                <RenderSubTask />
        </div>
    );
}

export default RenderTask;