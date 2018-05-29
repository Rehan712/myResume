import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends React.Component {
	componentDidMount() {
		const pathname = this.props.routeProps.location.pathname;
		const name = pathname.slice(1, pathname.length);
		this.props.getSingleData(name);
	}
	render() {
		console.log("these are the props from home componnet", this.props);
		return <div className="home">This is the home Component</div>;
	}
}

export default connect(null, { getSingleData: actions.getSingleData })(Home);
