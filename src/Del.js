/** @format */

import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { auth, db } from "./Firebase";
const Del = () => {
	const history = useHistory();
	const { id } = useParams();
	//const u = auth.currentUser;
	const [order, setCont] = useState([]);
	useEffect(() => {
		db.collection("booking")
			.doc(id)
			.onSnapshot((doc) => {
				setCont(doc.data());
			});
	}, []);
	useEffect(() => {
		const timer = setTimeout(() => {
			db.collection("booking").doc(id).update({
				status: "servicing to your vehicle",
			});
			history.push("/ret/" + id);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div class='del'>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className="curve">
				<path
					fill='#5000ca'
					fill-opacity='1'
					d='M0,224L80,240C160,256,320,288,480,272C640,256,800,192,960,181.3C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'></path>
			</svg>
			<div class='container curve_con'>
				<div class='container'>
					<center>
						<h1>
							<b>Please Wait Untill Redirect</b>
						</h1>
						<h1>
							<b>Servicing to Your Vechicle</b>
						</h1>
					</center>

					<div class='container'>
								<div class=''>
									<div class='card '>
										<div class=''>
											<span
												class='card-title mx-3'
												style={{ color: "gray", fontSize: "15.5px" }}>
												Service Type
											</span>
											<h6 class='card-title mx-3'>
												<b>{order.type}</b>
											</h6>
											<span
												class='card-title mx-3'
												style={{ color: "gray", fontSize: "15.5px" }}>
												Status Of Service
											</span>
											<h6 class='card-title mx-3'>
												<b>{order.status}</b>
											</h6>
											<span
												class='card-title mx-3'
												style={{ color: "gray", fontSize: "15.5px" }}>
												Your Address
											</span>
											<h6 class='card-title mx-3'>
												<b>{order.add}</b>
											</h6>
											<span
												class='card-title mx-3'
												style={{ color: "gray", fontSize: "15.5px" }}>
												Vehicle Model
											</span>
											<h6 class='card-text mx-3'>
												<b>{order.model}</b>
											</h6>
											<span
												class='card-title mx-3'
												style={{ color: "gray", fontSize: "15.5px" }}>
												Date
											</span>
											<h6 class='card-text mx-3'>
												<b>{order.date}</b>
											</h6>
											<span
												class='card-title mx-3'
												style={{ color: "gray", fontSize: "15.5px" }}>
												Grand Total
											</span>
											<h5 class='card-text mx-3'>
												<b>₹{order.total}</b>
											</h5>
											<hr></hr>
											<h6 class='card-text mx-3'>
												<b>Service Partner : Ramana</b>
											</h6>
											<span
												class='card-title mx-3'
												style={{ color: "gray", fontSize: "15.5px" }}>
												From Service Station
											</span>
											<h6 class='card-text mx-3'>
												<b>{order.station}</b>
											</h6>
											<span
												class='card-title mx-3'
												style={{ color: "gray", fontSize: "15.5px" }}>
												Address
											</span>
											<h6 class='card-text mx-3 mb-5'>
												<b>
													Address: 8-101/1, Al Kareem Plaza,DMRL X Road,
													PochammaGuda ,Near Saroor Nagar,Hyderabad{" "}
												</b>
											</h6>
										</div>
									</div>
								</div>
							</div>
				</div>
			</div>
		</div>
	);
};

export default Del;
