/** @format */

import React from "react";
import logo from "../Vsev.png";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/Actions";
function Navbar() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.user);
	//console.log(isAuthenticated);

	return (
		<div className='Nav'>
			<nav class='navbar navbar-expand-lg navbar-light '>
				<a class='navbar-brand' href='#'>
					<img
						src={logo}
						width='30'
						height='30'
						class='d-inline-block align-top'
						alt='VserV'
						style={{ borderRadius: "100%" }}
					/>
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div class='navbar-nav'>
						<a
							class='nav-item nav-link active'
							onClick={() => {
								history.push("/Home");
							}}>
							Home
						</a>
						<a
							class='nav-item nav-link active'
							onClick={() => {
								history.push("/About");
							}}>
							About
						</a>
						<a
							class='nav-item nav-link active'
							onClick={() => {
								history.push("/Contact");
							}}>
							Contact
						</a>
						<a
							class='nav-item nav-link active'
							onClick={(e) => {
								e.preventDefault();
								auth.signOut();
								dispatch(logout());
								toast.success("Logged Out");
								history.push("/");
							}}>
							LogOut
						</a>
						<a
							class='nav-item nav-link active'
							onClick={() => {
								history.push("/Help");
							}}>
							Orders
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
