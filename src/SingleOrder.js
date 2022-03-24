/** @format */

import React, { useState, useEffect } from "react";
import { auth, db } from "./Firebase";
import { useParams } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { jsPDF } from "jspdf";
const SingleOrder = () => {
	const { id } = useParams();
	const [order, setOrder] = useState([]);
	useEffect(() => {
		db.collection("booking")
			.doc(id)
			.onSnapshot((snap) => {
				setOrder(snap.data());
			});
	}, []);
	//console.log(order);
	const pdfFile = (order) => {
		const pdf = new jsPDF("potrait", "pt", "a4", "false");
		pdf.setFont("poppins");
		pdf.setFont("bold");
		pdf.setFontSize(26);
		pdf.text(100, 50, "Summary");
		pdf.setFontSize(12);
		pdf.setFont("normal");
		pdf.text(100, 80, "Order ID: " + id);
		pdf.text(100, 110, "Vehicle: " + order.vehicle);
		pdf.text(100, 140, "Booking: " + order.order);
		pdf.text(100, 170, "Status: " + order.status);
		pdf.text(100, 200, "Phone : " + "891xxxxxxx");
		pdf.text(100, 230, "Vehicle Model : " + order.model);
		pdf.text(100, 260, "Date : " + order.date);
		pdf.text(100, 290, "Address : " + order.add);
		pdf.text(100, 320, "Grand Total : " + order.total);
		pdf.text(100, 350, "Service Partner : Ramana");
		pdf.text(100, 380, "From Service Station : " + order.station);
		pdf.text(
			100,
			410,
			"Address : 8-101/1, Al Kareem Plaza,DMRL X Road, PochammaGuda,Hyderabad",
		);

		pdf.save("Summary.pdf");
	};
	const generatePdf = () => {
		const content = document.getElementById("print");
		const pdf = new jsPDF("landscape", "pt", "a4", "false");
		pdf.html(content, 20, 20);
		pdf.save("Summary.pdf");
	};
	return (
		<div class='container del'>
			<div class='container my-3'>
				<div class='container'>
					<div class=' card '>
						<div
							id='print'
							class='container card-body'
							style={{ backgroundColor: "#f5f5f5" }}>
							<div style={{ backgroundColor: "" }}>
								<center>
									<h1>
										<b>Order Details</b>
									</h1>
								</center>
								<div class='row'>
									<h1 class=' col-md-6 col-sm-12' style={{}}>
										<b>Vehicle:{order.vehicle}</b>
									</h1>

									{order.order === "pending" ? (
										<h5
											class='col-md-6 col-sm-12'
											style={{ textAlign: "center" }}>
											<span class='badge badge-warning'>
												<MdOutlinePending />
												{order.order}
											</span>
										</h5>
									) : order.order === "success" ? (
										<h5
											class='col-md-6 col-sm-12'
											style={{ textAlign: "center" }}>
											<span class='badge badge-success'>
												<MdDoneOutline />
												{order.order}
											</span>
										</h5>
									) : (
										<h5
											class='col-md-6 col-sm-12'
											style={{ textAlign: "center" }}>
											<span class='badge badge-danger'>
												<MdCancel />
												{order.order}
											</span>
										</h5>
									)}
								</div>
								<h5 class='card-text mx-2'>
									<b>Order id : {id}</b>
								</h5>
							</div>
						</div>
						<div class='container card-body'>
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
								<br />
								{order.lat && order.lng ? (
									<div>
										<b>latitude:{order.lat}</b>
										<br />
										<b>longitude:{order.lng}</b>
									</div>
								) : (
									""
								)}
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
							<h6 class='card-text mx-3'>
								<b>
									Address: 8-101/1, Al Kareem Plaza,DMRL X Road, PochammaGuda
									,Near Saroor Nagar,Hyderabad{" "}
								</b>
							</h6>
						</div>
					</div>
					<center>
						<button
							class='btn btn-light m-3 '
							style={{ border: "1px solid black" }}
							onClick={() => {
								pdfFile(order);
							}}>
							{" "}
							Download Summary{" "}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								class='bi bi-download'
								viewBox='0 0 16 16'>
								<path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z' />
								<path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z' />
							</svg>
						</button>
					</center>
				</div>
			</div>
		</div>
	);
};

export default SingleOrder;
