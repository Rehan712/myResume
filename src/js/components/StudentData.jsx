import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class StudentData extends React.Component{
	// componentDidMount(){

	// }
	render(){
		console.log('these are the props from studentData',this.props)
		return (
			<div className="studentData">This is the studentData Component</div>
		)
	}
}

export default connect(null,{getData:actions.getData})(StudentData)