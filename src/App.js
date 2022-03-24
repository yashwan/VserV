/** @format */

import "./App.css";

import All from "./All";
import Login from "./Alog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./Firebase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function App() {
	const { isAuthenticated } = useSelector((state) => state.user);
	const [user, setUser] = useState(null);
	
	const history = useHistory();
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
	}, []);
	//console.log(isAuthenticated,user);
	return (
		<div className='App'>
			<ToastContainer />
			{ isAuthenticated && user !== null ? <All /> : <Login />}
		</div>
	);
}
//styles

export default App;
