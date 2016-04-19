import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

//openweathermap api key: a38fe95c4805d69a44f5731a355ff4f4
export default class SearchBar extends Component {
	//for controlled componenets
	constructor(props){
		super(props);

		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		//this function does not have access to 'this' object of SearchBar
		//therefore we need to bind this function in constructor
		this.setState({term: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();
		//we need to fetch weather data on search term
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });		
		
	}

	render(){
		return(
			<form onSubmit = {this.onFormSubmit} className="input-group">
			 	<input 
			 		placeholder ="Give five-day forecast in your fav city"
			 		value = {this.state.term}
			 		className ="form-control"
			 		onChange = {this.onInputChange} />
			 	<span className="input-group-btn">
			 		<button type="submit" className="btn btn-secondary">Submit</button>
			 	</span>
			 </form>
		);
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);