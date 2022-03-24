/** @format */

import React from "react";

import Navbar from "./navbar/Navbar";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./navbar/Home";
import About from "./navbar/About";
import Contact from "./navbar/Contact";
import Help from "./navbar/Help";
import Car from "./vehicles/Car";
import Bike from "./vehicles/Bike";
import Vehicle from "./vehicles/Vehicle";
import Part from "./Part";
import Del from "./Del";
import Ret from "./Ret";
import SingleOrder from "./SingleOrder";
function All() {
	const history = useHistory();
	if (history.location.pathname === "/") {
		history.push("/Home");
	}
	return (
		<div className='All'>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/Home' component={Home} />
				<Route path='/About' component={About} />
				<Route path='/Contact' component={Contact} />
				<Route path='/Help' component={Help} />
				<Route path='/vehicle/Car' component={Car} />
				<Route path='/vehicle/Bike' component={Bike} />
				<Route path='/vehicle/Other' component={Vehicle} />
				<Route path='/order/:id' component={Part} />
				<Route path='/delivery/:id' component={Del} />
				<Route path='/ret/:id' component={Ret} />
				<Route path='/orders/:id' component={SingleOrder} />
			</Switch>
		</div>
	);
}
//styles

export default All;
