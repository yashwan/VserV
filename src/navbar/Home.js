/** @format */

import React, { useState } from "react";
import Car from "../homeComponents/Car";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import { useHistory } from "react-router-dom";
const Home = () => {
	const [state, setState] = useState("");
	const [pin, setPin] = useState(null);
	//console.log(pin);
	const [t, setT] = useState(false);
	if (pin<600000 && pin>=500000) {
		setT(true);
	}

	const history = useHistory();
	const hash = [
		{
			t: "WeServe",
			url: "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-service-automobile-kiranshastry-lineal-kiranshastry.png",
		},
		{ t: "WeFix", url: "https://img.icons8.com/ios/50/000000/service.png" },
		{
			t: "WeCare",
			url: "https://img.icons8.com/external-tulpahn-basic-outline-tulpahn/48/000000/external-care-healthcare-tulpahn-basic-outline-tulpahn.png",
		},
	];
	
	return (
		<div className='Home'>
			<div>
				<div class='container mt-5 mb-5'>
					<div class='container '>
						<div class='container '>
							<center>
								<h1>
									<b>Please Select Vehicle</b>
								</h1>
							</center>
							<div class='form-group'>
								<input
									type='radio'
									name='vehicle'
									value='Bike'
									onChange={(e) => {
										setState(e.target.value);
									}}
								/>{" "}
								<b>Bike</b>
							</div>
							<div class='form-group'>
								<input
									type='radio'
									name='vehicle'
									value='Car'
									onChange={(e) => {
										setState(e.target.value);
									}}
								/>{" "}
								<b>Car</b>
							</div>
							<div class='form-group'>
								<input
									type='radio'
									name='vehicle'
									value='Other'
									onChange={(e) => {
										setState(e.target.value);
									}}
								/>{" "}
								<b>Other</b>
							</div>
							
							<a
								style={{
									display: "block",
									textAlign: "center",
									backgroundColor: "black",
									color: "white",
									padding: "5px 0px 5px 0px",
									borderRadius: "99px",
									cursor: "pointer",
								}}
								onClick={(e) => {
									e.preventDefault();
									if (state === "") {
										history.push(`/Home`);
									} else {
										history.push(`/vehicle/${state}`);
									}
								}}>
								Submit
							</a>
							<p class='my-3'>
								<b>
									*Note : Our services are valid only upto Hyderabad if your
									location other than Hyderabad Please ignore
								</b>
							</p>
							<div class='container my-5'>
								
								<div class='row'>
									{hash.map((item, index) => {
										return (
											<div class=' col-lg-4 col-md-4 col-sm-4'>
												<center>
                        <img src={item.url} alt='#' height="60" width="60" />
													<h3>
														<b>#{item.t}</b>
													</h3>
                          
												</center>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* image */}
			<div className='img1'>
				<div
					class='container img1-title'
					>
					<span style={{ display: "block" }}>
						<b>Service for Vehicle,</b>
					</span>
					<span style={{ display: "block" }}>
						<b>We are here to </b>
					</span>
					<span>
						<b>Serve</b>
					</span>
				</div>
				<div
					class='container img1-des'
					>
					<p>
						<b>
							For The Safest Ride We Need To Service Our Vehicle Time To Time,
						</b>
					</p>
					<p>
						<b>To Avoid Accidents we Need to Service the Vehicle </b>
					</p>
				</div>
				<a className="img1-btn" 
					>
					{" "}
					<b>Know More</b>{" "}
				</a>
			</div>
			<div className='bg1'>
				<div
					class='container bg1-title'
					>
					<span style={{ display: "block" }}>
						<b>Rest At Home,</b>
					</span>
					<span>
						<b>#VserV Here To Take </b>
					</span>
					<span>
						<b>Care</b>
					</span>
				</div>
				<div
					class='container bg1-des'
					>
					<p>
						<b>
							For The Safest Ride We Need To Service Our Vehicle Time To Time,
						</b>
					</p>
					<p>
						<b>To Avoid Accidents we Need to Service the Vehicle </b>
					</p>
				</div>
				<a className="bg1-btn"
					>
					{" "}
					<b>Know More</b>{" "}
				</a>
			</div>
			<div className='img2'>
				<div
					class='container img2-title'
				>
					<span style={{ display: "block" }}>
						<b>We Heard,</b>
					</span>
					<span style={{ display: "block" }}>
						<b>We are here </b>
					</span>
					<span>
						<b>We Serve
						We Care </b>
					</span>
				</div>
				<div
					class='container img2-des'
					>
					<p>
						<b>
							For The Safest Ride We Need To Service Our Vehicle Time To Time,
						</b>
					</p>
					<p>
						<b>To Avoid Accidents we Need to Service the Vehicle </b>
					</p>
				</div>
				<a className="img2-btn">
					{" "}
					<b>Know More</b>{" "}
				</a>
			</div>
			<div className='bg2'>
				<div
					class='container bg2-title'
					>
					<span style={{ display: "block" }}>
						<b>Doorstep Services,</b>
					</span>
					<span style={{ display: "block" }}>
						<b>Saves Time </b>
					</span>
					<span>
						<b>#We Fix</b>
					</span>
				</div>
				<div class='container bg2-des'
				>
					<p>
						<b>
							For The Safest Ride We Need To Service Our Vehicle Time To Time,
						</b>
					</p>
					<p>
						<b>To Avoid Accidents we Need to Service the Vehicle </b>
					</p>
				</div>
				<a className="bg2-btn">
					{" "}
					<b>Know More</b>{" "}
				</a>
			</div>
			<div style={{ backgroundColor: "black" }} className='footer'>
				<div
					style={{
						color: "white",
						fontSize: "3vh",
						margin: "0vh 10vh 0vh 10vh",
						backgroundColor: "black",
					}}>
					<center>
						<span style={{ display: "block" }}>Blog</span>
						<span style={{ display: "block" }}>VserV</span>
						<span style={{ display: "block" }}>Covid-19</span>
						<span style={{ display: "block" }}>Partners</span>
						<span style={{ display: "block" }}>2022@ Copyrights</span>
					</center>
				</div>
			</div>
		</div>
	);
};

export default Home;
