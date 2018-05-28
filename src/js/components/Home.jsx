import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Home extends React.Component{
	componentDidMount(){

	}
	render(){
		return (
			<div className="home"></div>
		)
	}
}

export default connect(null,{getData:actions.getData})(Home)