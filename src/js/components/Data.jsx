import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Button from "@material-ui/core/Button";

class Data extends React.Component {
	componentDidMount() {
		const { getData } = this.props;
		const name = localStorage.getItem("name");
		console.log("this is id from data component", name);
		getData(name);
	}

	render() {
		const { singleData, signOutData } = this.props;
		console.log("this is the data", this.props.singleData);
		return (
			<div>
				<div className="workExperience">
					<Button variant="raised" color="primary">Add Experience</Button>
				</div>
				<div className="button">
					<button onClick={signOutData}>Sign out</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		singledata: state.singleData
	};
}

export default connect(mapStateToProps, {
	getData: actions.getData,
	signOutData: actions.signOutData
})(Data);
