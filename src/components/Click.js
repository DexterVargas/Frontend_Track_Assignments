import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/stylesheets/style.css"

export default class Click extends React.Component {
    constructor(){
        super();
        this.totalClick = 0;
    }
    addClick(){
		let result = this.totalClick++;
        this.setState({click:result});
    }
    render(){
		return(
			<div className="col-md-12 text-center container">
				<Button variant="primary" size="lg" onClick={()=>this.addClick()} className="mt-5">
					Click Me
				</Button>
				<h1 className="mt-5">Total no of clicks: {this.totalClick}</h1>
			</div>
		);
    }
}