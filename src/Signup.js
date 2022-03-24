/** @format */

import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { db, auth } from "./Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch,useSelector} from "react-redux";

const Signup = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const {isAuthenticated} = useSelector((state) => state.user);
	//console.log(isAuthenticated);
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = data;

	const changeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12  my-5'>
						<center>
							<h1>Signup</h1>
						</center>
						<div class='form-group'>
							<label>Email address</label>
							<input
								type='email'
								class='form-control'
								name='email'
								value={email}
								onChange={changeHandler}
								placeholder='Enter email *'
							/>
						</div>
						<div class='form-group'>
							<label>Password</label>
							<input
								type='password'
								class='form-control'
								name='password'
								value={password}
								onChange={changeHandler}
								placeholder='Enter password *'
							/>
						</div>
						<a href='/'> Already have an account ?</a>
						<button
							type='submit'
							class='btn btn-dark btn-block mb-2'
							onClick={(e) => {
								e.preventDefault();
								auth
									.createUserWithEmailAndPassword(email, password)
									.then((u) => {
										db.collection("users").doc(u.user.uid).set({
											userid: u.user.uid,
											email: email,
											password: password,
										});
									})
									.then(() => {
										history.push("/");
										toast.success("Signup Successful");
									})
									.catch((err) => {
										toast.error(err.message);
									});
									
							}}
							
							
							>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
