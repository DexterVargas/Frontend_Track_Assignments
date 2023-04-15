import React, { createContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TaskLogger.css";
import { useState , useEffect } from 'react';
import RenderTask from './data/RenderTask';
import uuid from 'react-uuid';

export const TaskContext = createContext();

const TaskLogger = () => {

	const [task, setTask] = useState({
		title: '',
		tasktype: ''
	});
	const [tasks, setTasks] = useState([]);

	useEffect(()=>{
		const items = JSON.parse(localStorage.getItem('task'));
		if (items) {
			setTasks(items);
		}
	},[]);

	const percentageComputer = () => {
		tasks.map((task) => {
			let ongoing = 0;
			let complete = 0;
			task.subtask.map((sub) =>{
				if (sub.status === 'Ongoing') ongoing = ongoing + 50;
				if (sub.status === 'Completed') complete = complete + 100;	
			});
			const getPercent = ((ongoing) +  (complete)) / task.subtask.length;
			if (getPercent === 100) task.color = 'success';
			if (getPercent < 100 && getPercent>0) task.color = 'warning';
			if (getPercent === 0) task.color = 'secondary';
			task.percentage =  (getPercent > 0) ? getPercent : 0 ;
		})
	}
	
	percentageComputer();
	
	useEffect(() => {
		localStorage.setItem('task', JSON.stringify(tasks));
    },[tasks]);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if (task.title === '' || task.tasktype === '') {
			alert('Check input');
		} else {
			const taskList = tasks.slice();
			taskList.push({id: uuid(), title: task.title, type: task.tasktype, subtask: [], percentage: 0, color: 'secondary'});
			setTasks(taskList);
			setTask({
				title: '',
				tasktype: ''
			});
		}
		percentageComputer();
	} 

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
			handleSubmit(e);
        }
    };

	const handleInputChange = (e) => {
		console.log(e.target.value);
		setTask((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	}

    const handleDelete = (e) => {
		tasks.map((task, ind) => {
			if (task.id === e.target.name) {
				const taskList = tasks.slice();
				const splicedData = taskList.splice(ind,1);
				alert(`Task Deleted. ${JSON.stringify(splicedData)}`)
				setTasks(taskList);
			}
			return null;
		})

    }

	const handleClick = (e) => {
		console.log(e.target.value);
		setTask((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
    }

	const values = {
		tasks,
		handleDelete,
		percentageComputer
	} 
	return (
		<>
			<TaskContext.Provider value={values}>
				<Form>
					<h1 className='text-center'>Tasks Logger</h1>
					<Form.Group className="mb-3">
						<FloatingLabel label="Task Title:" controlId="floatingInput" className='mb-3 mt-4'>
							<Form.Control type="text" placeholder="title" required name="title" value={task.title} onChange={handleInputChange} autoFocus/>
						</FloatingLabel>
						<p className='marked text-left'>Task Type: </p>
						<div className="mb-3 d-flex justify-content-evenly">
                            {['Front-End','Back-End'].map((type) => (
                                <div key={uuid()} className='d-inline-block'>
                                    <Form.Check inline name='tasktype' slot={type} id={type} type='radio' onChange={handleClick} checked={task.tasktype === type} value={type} required/>
                                    <Form.Label htmlFor={type} >{type}</Form.Label> 
                                </div>
                            ))}
						<Button className="float-end" variant="primary" type="submit" onKeyDown={handleKeyDown} onClick={handleSubmit}>Add</Button>	
                    	</div>

					</Form.Group>
				</Form>
				<div className='user-list-container'>
					<RenderTask />
				</div>
			</TaskContext.Provider>
		</>
	);
}

export default TaskLogger;