/** @format */

import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "./Firebase";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/Actions";
const Login = () => {
	//const history = useHistory();
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.user);
	//console.log(isAuthenticated);
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const { email, password } = data;
	const changeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		//console.log(data);
	};
	const history = useHistory();

	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12  my-5'>
						<center>
							<h1>Login</h1>
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
						<a href='/Signup'> new user ?</a>
						<button
							type='submit'
							class='btn btn-primary btn-block mb-2'
							onClick={(e) => {
								e.preventDefault();
								if (email === "" || password === "") {
									toast.error("Please fill all fields");
								} else {
									dispatch(login(email, password));
								}
							}}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
