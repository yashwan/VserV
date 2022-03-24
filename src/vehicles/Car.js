/** @format */

import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { auth, db } from "../Firebase";
import { useHistory } from "react-router-dom";
import  Map  from "./Map";
const Car = () => {
	const history = useHistory();
	const [type, setType] = useState("");
	const [station, setStation] = useState("");
	const [model, setModel] = useState("");
	const [add, setAdd] = useState("");
	const [total, setTotal] = useState(0);
	const [t, setT] = useState(false);
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const submitHandler = (e) => {
		e.preventDefault();
		if (type === "" || station === "" || model === "" || add === "") {
			toast.error("Please fill all the fields");
		} else {
			toast.success("Successfully Registered");
			setType("");
			setStation("");
			setModel("");
			setAdd("");
			setTotal(0);
			const u = auth.currentUser;
			db.collection("booking")
				.add({
					vehicle: "Car",
					userid: u.uid,
					email: u.email,
					type: type,
					station: station,
					model: model,
					add: add,
					total: total + 200,
					order: "pending",
					otp: 0,
					status: "ordered by user",
					date: new Date().toLocaleDateString(),
					createdAt: new Date(),
					lat: lat,
					lng: lng,
				})
				.then((da) => {
					history.push("/order/" + da.id);
				});
		}
	};
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLat(position.coords.latitude);
			setLng(position.coords.longitude);
		});
		
	},[]);
	return (
		<div className='Vehicle'>
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className="curve">
				<path
					fill='#5000ca'
					fill-opacity='1'
					d='M0,224L80,240C160,256,320,288,480,272C640,256,800,192,960,181.3C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'></path>
			</svg>
			<div class='container curve_con' >
				<h1>
					<center>
						<b>Please Enter Car Details</b>
					</center>
				</h1>
				<div class='form-group'>
					<label>Vehicle Model</label>
					<input
						class='form-control'
						placeholder='Enter Vehicle Model *'
						name='model'
						value={model}
						onChange={(e) => {
							setModel(e.target.value);
						}}
					/>
				</div>
				<div style={{position:'relative'}}>
					<Map
						google={window.google}
						center={{ lat: lat, lng: lng }}
						height='35vh'
						zoom={15}
						setAdd={setAdd}
						setLat={setLat}
						setLng={setLng}
					/>
				</div>
				<center>
					<h3>
						<b>Service Type</b>
					</h3>
				</center>

				<div class='form-group'>
					<input
						type='radio'
						name='vehicle'
						value='General Service'
						onChange={(e) => {
							setType(e.target.value);
							setTotal(10000);
              setT(true);
						}}
					/>{" "}
					<b>General Service</b> <br></br>
					<input
						type='radio'
						name='vehicle'
						value='Wash'
						onChange={(e) => {
							setType(e.target.value);
							setTotal(2500);
              setT(true);
						}}
					/>{" "}
					<b>Wash</b>
				</div>
				<center>
					<h3>
						<b>Please Select Service Station </b>
					</h3>
				</center>
				<div class='form-group'>
					<input
						type='radio'
						name='station'
						value='Banjara Hills Service Station'
						onChange={(e) => {
							setStation(e.target.value);
						}}
					/>{" "}
					<b>Banjara Hills Service Station</b>
					<br></br>
					<input
						type='radio'
						name='station'
						value='kukatpally Service Station'
						onChange={(e) => {
							setStation(e.target.value);
						}}
					/>{" "}
					<b>kukatpally Service Station</b>
					<br></br>
					<input
						type='radio'
						name='station'
						value='Champapet Service Station'
						onChange={(e) => {
							setStation(e.target.value);
						}}
					/>{" "}
					<b>Champapet Service Station</b>
					<br></br>
					<input
						type='radio'
						name='station'
						value='Nampally Service Station'
						onChange={(e) => {
							setStation(e.target.value);
						}}
					/>{" "}
					<b>Nampally Service Station</b>
					<br></br>
					<input
						type='radio'
						name='station'
						value='Dilshuknagar Service Station'
						onChange={(e) => {
							setStation(e.target.value);
						}}
					/>{" "}
					<b>Dilshuknagar Service Station</b>
				</div>
				{t ? (
					<div>
						<h3 style={{ display: "inline" }}>
							<b>Sub Total:</b>
						</h3>
						<h3 style={{ display: "inline" }}>
							<b>{total}/-</b>
						</h3>
						<br></br>
						<h3 style={{ display: "inline" }}>
							<b>Partner Charges:</b>
						</h3>
						<h3 style={{ display: "inline" }}>
							<b>90</b>
						</h3>
						<br></br>
						<h3 style={{ display: "inline" }}>
							<b>Total:</b>
						</h3>
						<h3 style={{ display: "inline" }}>
							<b>{total + 200}/-</b>
						</h3>
					</div>
				) : (
					""
				)}

				<button class='btn btn-danger btn-block my-2' onClick={submitHandler}>
					Conform Order
				</button>
			</div>
		</div>
	);
};

export default Car;
