import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Data extends React.Component {
	componentDidMount() {
		const { id, getData } = this.props;
		console.log('this is id from data component', id);
		getData(id);
	}

	render() {
		const { data, signOutData } = this.props;
		console.log('this is the data', this.props.data);
		return (
			<div>
				<div className="button">
					<button onClick={signOutData}>Sign out</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data,
		id: state.dataFromLogin.id
	};
}

export default connect(mapStateToProps, {
	getData: actions.getData,
	signOutData: actions.signOutData
})(Data);
