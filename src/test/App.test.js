import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import { RenderList } from '../pages/assignments/data/RenderList';

var jsdom = require("mocha-jsdom");
let rootContainer;

/* setting DOM testing library to execute the test in our console */
global.document = jsdom({
    url: "http://localhost:3000/"
});

/*hook that is run automatically before each test*/
beforeEach(() => {
    rootContainer = document.createElement("div"); /*we will mount our component*/
    document.body.appendChild(rootContainer);
});

/*hook that is run automatically after each test*/
afterEach(() => {
    document.body.removeChild(rootContainer); /*we will unmount our component*/
    rootContainer = null;
});

/*"describe" structures our test script and groups the individual test cases.*/


describe('RenderList: Component that render the list of task from the Local Storage', () => {

    act(() => {
        ReactDOM.render(<RenderList />, rootContainer);
    });

	describe('Pending', () => {
		it('should change color to danger', () => {
			const initialTodos = [{"id":"1f00c0a4-ec8d-de05-92bd-519b1826b6f3","title":"bbbb","details":"bbbb","status":"Ongoing","color":"primary"}];
			const action = {
				type: 'Pending',
				id: '1f00c0a4-ec8d-de05-92bd-519b1826b6f3'
			};
			const nextState = reducer(initialTodos, action);

			expect(nextState).to.deep.equal({"id":"1f00c0a4-ec8d-de05-92bd-519b1826b6f3","title":"bbbb","details":"bbbb","status":"Ongoing","color":"danger"});
		});
	});

	// describe('Ongoing', () => {
	// 	it('should add a new Todo item', () => {
	// 		const initialState = ['Mow lawn'];
	// 		const action = {
	// 			type: 'ADD_TODO',
	// 			data: 'Walk Dog'
	// 		};
	// 		const nextState = reducer(initialState, action);

	// 		expect(nextState).to.deep.equal(['Mow lawn', 'Walk Dog']);
	// 	});
	// });

	// describe('Completed', () => {
	// 	it('should delete a given Todo item', () => {
	// 		const initialState = ['Mow lawn', 'Walk Dog'];
	// 		const action = {
	// 			type: 'DELETE_TODO',
	// 			data: 'Mow lawn'
	// 		};
	// 		const nextState = reducer(initialState, action);

	// 		expect(nextState).to.deep.equal(['Walk Dog']);
	// 	});

	// 	it('should do nothing if the Todo item to delete is not present', () => {
	// 		const initialState = ['Mow lawn', 'Walk Dog'];
	// 		const action = {
	// 			type: 'DELETE_TODO',
	// 			data: 'Write tutorial'
	// 		};
	// 		const nextState = reducer(initialState, action);

	// 		expect(nextState).to.deep.equal(['Mow lawn', 'Walk Dog']);
	// 	});
	// });
});