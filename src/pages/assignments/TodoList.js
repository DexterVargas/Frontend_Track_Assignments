import React, { createContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TodoList.css";
import { useState , useEffect } from 'react';
import RenderList from './data/RenderList';
import uuid from 'react-uuid';
export const TodoContext = createContext();

const itemsLocalStorage = JSON.parse(localStorage.getItem('tasklist')) || [];

function TodoList() {
	const [,reloadPage] = useState(0);
	const [inputs, setInputs] = useState({id:'', title: ''});
	const [tasks, setTasks] = useState(itemsLocalStorage);//first load only

	useEffect(() => {
		localStorage.setItem('tasklist', JSON.stringify(tasks));
    }, [tasks]);

	const handleSubmit = (e) => {
		// e.preventDefault();
		const taskList = tasks;
		taskList.push({id: uuid(), title: inputs.title, details: inputs.details, status:'Ongoing', color:'primary'});
		setTasks(taskList);
		localStorage.setItem('tasklist', JSON.stringify(taskList));
	} 
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
			// e.preventDefault();
			const taskList = tasks;
			taskList.push({id: uuid(), title: inputs.title, details: inputs.details, status:'Ongoing', color:'primary' });
			setTasks(taskList);
			localStorage.setItem('tasklist', JSON.stringify(taskList));
        }
    };

	const handleInputChange = (e) => {
		setInputs((input) => ({
			...input, 
			[e.target.name]: e.target.value
		}));
	}
    const handleDelete = (e) => {
		tasks.map((task, ind) => {
			if (task.id === e.target.name) {
				const splicedData = tasks.splice(ind,1);
				alert(`Contact Deleted. ${JSON.stringify(splicedData)}`)
				localStorage.setItem('tasklist', JSON.stringify(tasks));
			}
			return null;
		})
        reloadPage(Math.random());
    }

	const values = {
		itemsLocalStorage,
		handleDelete
	} 
	return (
		<>
			<TodoContext.Provider value={values}>
				<Form  onSubmit= {(e) => { 
							handleSubmit(e);
							setInputs({title: '', details: ''});
							reloadPage(Math.random());
						}} >
					<h1>TO-DO List APP</h1>
					<Form.Group className="mb-3">
						<FloatingLabel label="Title" controlId="floatingInput" className='mb-3 mt-4'>
							<Form.Control type="text" placeholder="name" required name="title" value={inputs.title} onChange={handleInputChange} autoFocus/>
						</FloatingLabel>
						<FloatingLabel label="Details" className='mb-3'>
							<Form.Control as="textarea" placeholder="email" required name="details" value={inputs.details} style={{ height: '100px' }} onChange={handleInputChange} />
						</FloatingLabel>
						<Button variant="primary" type="submit" onKeyDown={handleKeyDown}>Add</Button>	
					</Form.Group>
				</Form>
				<div className='user-list-container'>
					<div>TASKS</div>
					<RenderList />
				</div>
			</TodoContext.Provider>
		</>
	);
}

export default TodoList;