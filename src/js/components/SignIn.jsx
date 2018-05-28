import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Input, Button } from 'semantic-ui-react';

class SignIn extends React.Component {
	render() {
		const {
			inputData,
			changeName,
			changeEmail,
			changePassword,
			changeAddress,
			submitData
		} = this.props;
		console.log('this is input Data from Sign In ', inputData);
		return (
			<div className="signIn">
				<div className="form">
					<div className="textField">
						<Input
							label="Name"
							value={inputData.name}
							onChange={e => {
								changeName(e.target.value);
							}}
						/>
					</div>
					<div className="textField">
						<Input
							label="Email"
							value={inputData.email}
							onChange={e => {
								changeEmail(e.target.value);
							}}
						/>
					</div>
					<div className="textField">
						<Input
							label="Password"
							type="password"
							value={inputData.age}
							onChange={e => {
								changePassword(e.target.value);
							}}
						/>
					</div>
					<div className="textField">
						<Button
							color="red"
							onClick={e => {
								submitData(inputData);
							}}
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		inputData: state.inputFormData
	};
}

export default connect(mapStateToProps, {
	changeName: actions.changeName,
	changeEmail: actions.changeEmail,
	changePassword: actions.changePassword,
	submitData: actions.submitData
})(SignIn);
