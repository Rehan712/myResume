import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';

import Home from './Home';
import Data from './Data';
import SignIn from './SignIn';
import Login from './Login';
import StudentData from './StudentData'

import {isTokenValid} from '../utils'

class App extends React.Component{
	render(){
		return (
			<div className="app">
				<div className="menu">
					<Link to="/" style={{marginLeft:50, textDecoration:'none'}}>Home</Link>
					{
						isTokenValid() ?
						(
							
							<Link to="/data" style={{marginLeft:50, textDecoration:'none'}}>Data</Link>
						):''
						
					}
					<Link to="/siginIn" style={{marginLeft:50,textDecoration:'none'}}>SignIn</Link>
					
					<Link to="/login" style={{marginLeft:50, textDecoration:'none'}}>Login</Link>
					<Link to="/studentDataComponent" style={{marginLeft:50, textDecoration:'none'}}>studentData</Link>

					
				</div> 

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/data" component={Data} />
					<Route path="/siginIn" component={SignIn} />
					<Route path="/login" component={Login} />
					<Route path="/studentDataComponent" render={
						(routeProps)=>{
							return <StudentData routeProps={routeProps} />
						}
					} />


				</Switch>
			</div>
		)
	}
}

export default App;