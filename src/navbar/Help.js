/** @format */

import React, { useState, useEffect } from "react";
import { auth, db } from "../Firebase";
import { useHistory } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { MdDoneOutline} from "react-icons/md";
import { MdOutlinePending} from "react-icons/md";
const Help = () => {
	const u = auth.currentUser;
	const history = useHistory();
	const [data, setCont] = useState([]);
	let m = null;
	useEffect(() => {
		db.collection("booking")
			.where("userid", "==", u.uid)
			.orderBy("createdAt", "desc")
			.onSnapshot((snap) => {
				setCont(
					snap.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					})),
				);
			});
	}, []);
	//console.log(data);

	return (
		<div>
			<div class='container  my-4 '>
				<div class='container'>
					{data.length!==0 ? (
						data.map((item, index) => {
							return (
								<div>
									<div
										class='card my-5'
										key={index}
										onClick={(e) => {
											e.preventDefault();
											history.push(`/orders/${item.id}`);
										}}>
										<div
											class='container card-body'
											style={{ backgroundColor: "#f5f5f5" }}>
											<div>
												<div class='row'>
													<h1 class=' col-md-6 col-sm-6' style={{}}>
														<b>Vehicle:{item.data.vehicle}</b>
													</h1>

													{item.data.order === "pending" ? (
														<h5
															class='col-md-6 col-sm-6'
															style={{ textAlign: "center" }}>
															<span class='badge badge-warning'>
															<MdOutlinePending/>
																{item.data.order}
															</span>
														</h5>
													) : item.data.order === "success" ? (
														<h5
															class='col-md-6 col-sm-6'
															style={{ textAlign: "center" }}>
															<span class='badge badge-success'>
															<MdDoneOutline/>
																{item.data.order}
															</span>
														</h5>
													) : (
														<h5
															class='col-md-6 col-sm-6'
															style={{ textAlign: "center" }}>
															<span class='badge badge-danger'>
															<MdCancel />
																{item.data.order}
															</span>
														</h5>
													)}
												</div>
												<h6 class='card-text mx-2'>
													<b>{item.data.station}</b>
												</h6>
											</div>
										</div>

										<div class='container card-body'>
											<h6 class='card-title mx-3'>
												<b>{item.data.type}</b>
											</h6>
											<h6 class='card-text mx-3'>
												<b>{item.data.model}</b>
											</h6>
											<p class='card-text mx-3'>
												<b>{item.data.date}</b>
											</p>
											<h5 class='card-text mx-3'>
												<b>₹{item.data.total}</b>
											</h5>
										</div>
									</div>
								</div>
							);
						})
					) : (
						<div>
							<h1>
								<center>Oh.... No Orders Yet... </center>
							</h1>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Help;
