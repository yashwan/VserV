/** @format */

import React,{useState,useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { auth, db } from "./Firebase";
const Delivery = () => {
	const history = useHistory();
	const { id } = useParams();
	const [state, setState] = useState({
		d: "",
		data: "",
	});
	const u = auth.currentUser;
	useEffect(() => {
		db.collection("booking")
			.doc(id)
			.onSnapshot((doc) => {
				setState({ d: doc.id, data: doc.data() });
			}).then(()=>{
                console.log(state)
            });
	}, []);
	return (
		<div className='delivery'>
			<div class='container shadow my-5'>
				<center>
					<h1>
						<b>Servicing to Your Vechicle</b>
					</h1>
				</center>

				<div class='container my-3 delivery_con'>
					<div class='row'>
						<div class='col-md-12'>
							<h4 style={{ display: "inline" }}>
								<b>Vserver:</b>
							</h4>

							<h4 style={{ display: "inline", marginLeft: "0.5vw" }}>
								<b>vserver</b>
							</h4>
						</div>
					</div>
					<div class='row'>
						<div class='col-md-12'>
							<h4 style={{ display: "inline" }}>
								<b>Number:</b>
							</h4>

							<h4 style={{ display: "inline", marginLeft: "0.5vw" }}>
								<b>number</b>
							</h4>
						</div>
					</div>
					<div class='row'>
						<div class='col-md-12'>
							<h4 style={{ display: "inline" }}>
								<b>Vehicle:</b>
							</h4>

							<h4 style={{ display: "inline", marginLeft: "0.5vw" }}>
								<b>vehicle</b>
							</h4>
						</div>
					</div>
					<div class='row'>
						<div class='col-md-12'>
							<h4 style={{ display: "inline" }}>
								<b>Model:</b>
							</h4>

							<h4 style={{ display: "inline", marginLeft: "0.5vw" }}>
								<b>model</b>
							</h4>
						</div>
					</div>
					<div class='row'>
						<div class='col-md-12'>
							<h4 style={{ display: "inline" }}>
								<b>Station:</b>
							</h4>

							<h4 style={{ display: "inline", marginLeft: "0.5vw" }}>
								<b>Station</b>
							</h4>
						</div>
					</div>
					<div class='row'>
						<div class='col-md-12  '>
							<h4 style={{ display: "inline" }}>
								<b>Service Type:</b>
							</h4>

							<h4 style={{ display: "inline", marginLeft: "0.5vw" }}>
								<b>service</b>
							</h4>
						</div>
					</div>
					<div class='row'>
						<div class='col-md-12'>
							<h2 style={{ display: "inline" }}>
								<b>Total:</b>
							</h2>

							<h2 style={{ display: "inline", marginLeft: "0.5vw" }}>
								<b>Total</b>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Delivery;
